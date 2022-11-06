// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import axios from 'axios';

import { createBuilder, VegaBuilder } from '@vis-talk/vega-builder';

import { autocompleteInline } from './autocomplete';
import { TopLevelSpec } from 'vega-lite/build/src/spec';
import { DataContext, Interpretation } from '@vis-talk/interpreter';
import { csvParse, autoType } from 'd3-dsv';

export const languageName = 'VisTalk';
export interface Session {
  source: string;
  data: string;
  input: string;
  ack?: boolean;
}
export const disposeList = new Array<monaco.IDisposable>();

export enum SessionStates {
  None,
  TextLoaded,
  TableParsed,
  VegaParsed,
  SessionCreated,
}

export interface RestoreSession {
  url: string;
  input: string;
}
export interface State {
  dataset: DataContext | null;
  navKey: 'home' | 'create' | 'gallery';
  sessionState: SessionStates;
  asyncDataUrl?: string;
  dataText: string;
  isLoading: boolean;
  session: VegaBuilder | null;
  naturalLanguageEditor: monaco.editor.ICodeEditor | null;
  vegaSpec: TopLevelSpec | null;
  vegaJson: string;
  version: number;
  changed: boolean;
  fileKey: number;
  defaultValue: string;
  showDetails: boolean;
  pivotValue: string;
  restoreSession: RestoreSession | null;
}

let defaultKey: 'home' | 'create' | 'gallery' = 'home';
if (window.location.hash === '#create') defaultKey = 'create';
if (window.location.hash === '#gallery') defaultKey = 'gallery';

export const urlDataCache = new Map<string, string>();

export const _initState: State = {
  navKey: defaultKey,
  dataset: null,
  dataText: '',
  sessionState: SessionStates.None,
  isLoading: false,
  session: null,
  naturalLanguageEditor: null,
  vegaSpec: null,
  vegaJson: '{}',
  version: 0,
  changed: false,
  fileKey: 0,
  defaultValue: '',
  showDetails: true,
  restoreSession: null,
  pivotValue: 'table',
};

export interface NavHomeAction {
  type: 'navHome';
}

export interface NavCreateAction {
  type: 'navCreate';
}

export interface NavGalleryAction {
  type: 'navGallery';
}

export interface LoadDataAction {
  type: 'loadData';
  dataText: string;
}

export interface PivotAction {
  type: 'pivot';
  value: string;
}

export interface ParseDataAction {
  type: 'parseData';
  dataText: string;
}

export interface EditDataAction {
  type: 'editData';
}

export interface LoadDataUrlAsyncStartAction {
  type: 'loadDataAsyncStart';
  url: string;
}

export interface LoadDataUrlAsyncCompleteAction {
  type: 'loadDataAsyncComplete';
  dataText: string;
}

export interface CreateSessionAction {
  type: 'createSession';
  dataset: DataContext;
}

export interface EditVegaAction {
  type: 'editVega';
  json: string;
}

export interface EditorMountAction {
  type: 'editorMount';
  editor: monaco.editor.ICodeEditor;
}

export interface RunAction {
  type: 'run';
  input: string[];
}

export interface InterpretAction {
  type: 'interpret';
  input: string[];
}

export interface ClearAction {
  type: 'clear';
}

export interface RestoreSessionStartAction {
  type: 'restoreStart';
  restoreSession: RestoreSession;
}

export interface RestoreSessionCompleteAction {
  type: 'restoreComplete';
  dataText: string;
  input: string;
}

export interface ToggleShowDetailsAction {
  type: 'toggleShowDetails';
}

export type ReducerAction =
  | NavHomeAction
  | NavCreateAction
  | NavGalleryAction
  | LoadDataAction
  | ParseDataAction
  | CreateSessionAction
  | LoadDataUrlAsyncStartAction
  | LoadDataUrlAsyncCompleteAction
  | RunAction
  | InterpretAction
  | EditorMountAction
  | ClearAction
  | EditDataAction
  | RestoreSessionStartAction
  | RestoreSessionCompleteAction
  | ToggleShowDetailsAction
  | PivotAction
  | EditVegaAction;

export function updateValue(
  session: VegaBuilder | null,
  editor: monaco.editor.ICodeEditor,
  value: string,
  decorations: string[],
  dispatch: React.Dispatch<ReducerAction>
) {
  // if (value === '' || value.length === 1) {
  //   if (session && session.spec !== null) {
  //     dispatch({ type: 'clear' });
  //   }
  // }

  // if (session) {
  //   session.inputValue = value;
  // }
  // inputValue.current = value;
  let shouldRun = true;
  if (editor) {
    const position = editor.getPosition();
    const model = editor.getModel();
    if (model) {
      if (
        position &&
        model.getFullModelRange().endLineNumber === position.lineNumber + 1 &&
        model.getLineMaxColumn(position.lineNumber) === position.column
      ) {
        shouldRun = false;
        dispatch({ type: 'run', input: model.getLinesContent() });
        // runAsync();
      } else {
        const value = model.getValue();
        // check word breaks
        if (value.endsWith(' ') || value.endsWith('\n'))
          dispatch({ type: 'interpret', input: model.getLinesContent() });
      }
    }
  }
  // setRunPrimary(shouldRun);
}

export function _reducer(state: State, action: ReducerAction): State {
  switch (action.type) {
    case 'editVega': {
      let vegaSpec = state.vegaSpec;
      try {
        vegaSpec = JSON.parse(action.json);
      } catch (error) {
        console.error(error);
      }
      return {
        ...state,
        vegaJson: action.json,
        vegaSpec,
      };
    }

    case 'pivot':
      return {
        ...state,
        pivotValue: action.value,
      };

    case 'toggleShowDetails':
      return {
        ...state,
        showDetails: !state.showDetails,
      };

    case 'restoreStart': {
      const restoreSession = action.restoreSession;
      return {
        ...state,
        defaultValue: restoreSession.input,
        restoreSession,
      };
    }

    case 'restoreComplete': {
      const dataText = action.dataText;
      const parsed = csvParse(dataText, autoType);
      const session = new VegaBuilder(parsed);

      // session.inputValue = action.input;

      if (session.dataProvider) {
        return {
          ...state,
          dataset: session.dataProvider,
          dataText,
          session,
          sessionState: SessionStates.SessionCreated,
          restoreSession: null,
        };
      }
      return state;
    }

    case 'editorMount': {
      return {
        ...state,
        naturalLanguageEditor: action.editor,
      };
    }

    case 'editData':
      return {
        ...state,
        sessionState: SessionStates.TextLoaded,
      };

    case 'interpret': {
      let interpretations = state.session?.interpretations ?? [];
      const decorations = state.session?.decorations ?? [];
      if (state.session && state.naturalLanguageEditor) {
        const { session, naturalLanguageEditor } = state;
        if (session && naturalLanguageEditor) {
          const model = naturalLanguageEditor.getModel();
          if (model) {
            const lines = model.getLinesContent();
            session.setInput(lines);
            interpretations = session.interpretations;
            if (interpretations.length > 0) {
              const newDecorations = buildDecorations(interpretations);
              const dec = naturalLanguageEditor.deltaDecorations(
                decorations,
                newDecorations
              );
              session.decorations = dec;
            }
          }
        }
      }
      return state;
    }

    case 'run': {
      let vegaSpec = state.vegaSpec;
      let vegaJson = state.vegaJson;
      let interpretations = state.session?.interpretations ?? [];
      const decorations = state.session?.decorations ?? [];
      if (state.session && state.naturalLanguageEditor) {
        const { session, naturalLanguageEditor } = state;
        if (session && naturalLanguageEditor) {
          const model = naturalLanguageEditor.getModel();
          if (model) {
            const lines = model.getLinesContent();
            session.setInput(lines);
            vegaSpec = session.build({ values: state.session?.data ?? [] });
            vegaJson = JSON.stringify(vegaSpec, null, 2);
            interpretations = session.interpretations;
            if (interpretations.length > 0) {
              const newDecorations = buildDecorations(interpretations);
              const dec = naturalLanguageEditor.deltaDecorations(
                decorations,
                newDecorations
              );
              session.decorations = dec;
            }
          }
        }
      }
      return {
        ...state,
        vegaSpec,
        vegaJson,
        version: state.version + 1,
        changed: false,
      };
    }

    case 'clear': {
      if (state.naturalLanguageEditor) {
        const editor = state.naturalLanguageEditor;
        const model = editor.getModel();
        if (model && state.session) {
          const dec = editor.deltaDecorations(state.session.decorations, []);
          state.session.decorations = dec;
        }
      }

      return {
        ...state,
        vegaSpec: null,
        version: state.version + 1,
      };
    }

    case 'loadDataAsyncStart':
      return {
        ...state,
        isLoading: true,
        asyncDataUrl: action.url,
      };

    case 'loadDataAsyncComplete':
      return {
        ...state,
        isLoading: false,
        dataText: action.dataText,
        asyncDataUrl: undefined,
        sessionState: SessionStates.TextLoaded,
      };

    case 'loadData':
      return {
        ...state,
        isLoading: false,
        dataText: action.dataText,
        asyncDataUrl: undefined,
        fileKey: state.fileKey + 1,
      };

    case 'navHome':
      window.history.pushState(
        '',
        '',
        `${window.location.pathname}${window.location.search}`
      );
      return {
        ...state,
        navKey: 'home',
      };

    case 'navCreate':
      window.location.hash = 'create';
      return {
        ...state,
        navKey: 'create',
      };

    case 'navGallery':
      window.location.hash = 'gallery';
      return {
        ...state,
        navKey: 'gallery',
      };

    case 'parseData': {
      const dataText = action.dataText;
      const values = csvParse(dataText, autoType);
      const session = createBuilder(values);
      const dataset = session.dataProvider;
      if (dataset) {
        return {
          ...state,
          dataset,
          session,
          sessionState: SessionStates.TableParsed,
        };
      }
      return state;
    }

    case 'createSession': {
      return {
        ...state,
        sessionState: SessionStates.SessionCreated,
      };
    }

    default:
      return state;
  }
}

export function buildDecorations(interpretations: Interpretation[]) {
  const newDecorations: monaco.editor.IModelDeltaDecoration[] = [];
  let line = 0;
  for (const interpretation of interpretations) {
    line++;
    for (const term of interpretation.terms) {
      if (!term || !term.tag || term.tag === 'O') {
        if (term.tokens[0].term === '<UNK>') {
          const inlineClassName = 'token_unk';
          newDecorations.push({
            range: new monaco.Range(
              line,
              term.start + 1,
              line,
              term.start + term.length + 1
            ),
            options: { inlineClassName },
          });
        }
        continue;
      }

      const inlineClassName = 'token token_' + term.tag;
      if (term.tokens[0].term === '<UNK>') {
        //inlineClassName += ' token_unk';
      }
      newDecorations.push({
        range: new monaco.Range(
          line,
          term.start + 1,
          line,
          term.start + term.length + 1
        ),
        options: { inlineClassName },
      });
    }
  }
  return newDecorations;
}

export function nav(key: string, dispatch: React.Dispatch<ReducerAction>) {
  switch (key) {
    case 'create':
      dispatch({ type: 'navCreate' });
      return;

    case 'gallery':
      dispatch({ type: 'navGallery' });
      break;

    default:
      dispatch({ type: 'navHome' });
      break;
  }
}

export function restore(
  restoreSession: RestoreSession | null,
  dispatch: React.Dispatch<ReducerAction>
) {
  if (restoreSession)
    axios
      .get(restoreSession.url)
      .then((response) => {
        const dataText = response.data;
        dispatch({
          type: 'restoreComplete',
          dataText,
          input: restoreSession.input,
        });
      })
      .catch((error) => {
        console.log('fetch error');
        console.log(error);
      });
}

export function fetchData(
  asyncDataUrl: string | undefined,
  dispatch: React.Dispatch<ReducerAction>
) {
  if (asyncDataUrl) {
    axios
      .get(asyncDataUrl)
      .then((response) => {
        const dataText = response.data;
        if (asyncDataUrl) {
          urlDataCache.set(asyncDataUrl, dataText);
        }
        dispatch({ type: 'loadDataAsyncComplete', dataText });
      })
      .catch((error) => {
        console.log('fetch error');
        console.log(error);
      });
  }
}

export function hoverInfo(
  session: VegaBuilder | null,
  model: monaco.editor.ITextModel,
  position: monaco.Position
) {
  const lineEnd = model.getLineMaxColumn(position.lineNumber);
  const ret = {
    range: new monaco.Range(
      position.lineNumber,
      1,
      position.lineNumber,
      lineEnd
    ),
    contents: [{ value: '', isTrusted: true }],
  };
  if (!session || session.interpretations.length === 0) {
    return ret;
  }
  const interpretation = session.interpretations[position.lineNumber - 1];
  //     let value = ` **Intents**: ${interpretation.intents.join(',')}
  //    `;
  //     value += `| Token | Label |
  // | ----------- | ----------- |
  // `;
  if (!interpretation) return ret;
  ret.contents = [
    {
      value: ` **Interpretation**: ${interpretation.intents.join(',')}`,
      isTrusted: true,
    },
  ];

  const input = new Array<string>();
  const values = new Array<string>();
  values.push(interpretation.input);
  values.push(` *${interpretation.intents.join(',')}*`);
  let range = ret.range;
  for (const term of interpretation.terms) {
    if (
      position.column >= term.start + 1 &&
      position.column <= term.start + term.length + 1
    ) {
      range = new monaco.Range(
        position.lineNumber,
        term.start + 1,
        position.lineNumber,
        term.start + term.length + 1
      );

      //         const value = `| Text | Term | Tag | Expression |
      // | ----------- | ----------- | ----------- | ----------- |
      // | ${token.text} | ${token.term.replace('<', '&lt;').replace('>', '&gt;')} | *${
      //           token.tag
      //         }* | ${token.expression ?? ''} |
      // `;
      const value =
        'The hovered term **' +
        term.text +
        '** is labeled as tag **' +
        term.tag +
        '**, with token **' +
        term.tokens[0].term.replace('<', '&lt;').replace('>', '&gt;') +
        '**';
      values.push(value);
      input.push('**' + term.text + '**');
    } else {
      input.push(term.text);
    }
  }

  values[0] =
    'The input *"' + input.join(' ') + '"* is interpreted as intents:';
  return {
    range,
    contents: values.map((x) => ({ value: x, isTrusted: true })),
  };
}

export function loadUrlAsync(
  path: string,
  dispatch: React.Dispatch<ReducerAction>
) {
  const url = window.location.origin + window.location.pathname + path;
  if (urlDataCache.has(url)) {
    const dataText = urlDataCache.get(url) ?? '';
    dispatch({ type: 'loadDataAsyncComplete', dataText });
  } else {
    dispatch({ type: 'loadDataAsyncStart', url });
  }
}

export function onEditorMount(
  session: VegaBuilder | null,
  dispatch: React.Dispatch<ReducerAction>,
  sessionState: SessionStates,
  e: monaco.editor.ICodeEditor,
  m: typeof monaco
) {
  const interpretations = session?.interpretations ?? [];
  m.languages.register({
    id: languageName,
  });
  for (const disposeItem of disposeList) {
    disposeItem.dispose();
  }
  disposeList.length = 0;
  disposeList.push(
    m.languages.registerHoverProvider(languageName, {
      provideHover: (
        model: monaco.editor.ITextModel,
        position: monaco.Position,
        token: monaco.CancellationToken
      ) => {
        return hoverInfo(session, model, position);
      },
    })
  );

  disposeList.push(
    m.languages.registerInlineCompletionsProvider(languageName, {
      provideInlineCompletions(
        model: monaco.editor.ITextModel,
        position: monaco.Position,
        context: monaco.languages.InlineCompletionContext,
        token: monaco.CancellationToken
      ): monaco.languages.InlineCompletions {
        if (session) {
          const inlineCompletions = autocompleteInline(
            model,
            position,
            context,
            session
          );
          return inlineCompletions;
        } else {
          return { items: [] };
        }
      },
      freeInlineCompletions(completions: monaco.languages.InlineCompletions) {
        // console.log('free completions ' + completions.items.length);
      },
    })
  );
  dispatch({ type: 'editorMount', editor: e });
  const model = e.getModel();
  if (e && model) {
    disposeList.push(
      model.onDidChangeContent(
        (ev: monaco.editor.IModelContentChangedEvent) => {
          const value = e.getValue();
          const decorations = session?.decorations ?? [];
          updateValue(session, e, value, decorations, dispatch);
        }
      )
    );
  }

  const initialValue = e.getValue();

  if (
    session &&
    initialValue !== '' &&
    sessionState === SessionStates.SessionCreated
  ) {
    const model = e.getModel();
    if (model) {
      const line = model.getFullModelRange().endLineNumber;
      const column = model.getLineMaxColumn(line);
      e.setSelection({
        startLineNumber: line,
        startColumn: column,
        endLineNumber: line,
        endColumn: column,
      });

      const newDecorations: monaco.editor.IModelDeltaDecoration[] =
        buildDecorations(interpretations);
      const dec = e.deltaDecorations(session.decorations, newDecorations);
      session.decorations = dec;
      dispatch({
        type: 'run',
        input: model.getLinesContent(),
      });
    }
  }

  e.focus();
}
