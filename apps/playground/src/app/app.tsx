// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { useEffect, useReducer, useRef, useState } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import Editor from '@monaco-editor/react';
import { Footer } from './footer';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Tab,
  TabList,
  Button,
  Spinner,
  makeStyles,
  useId,
  Textarea,
  Label,
  Link,
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Tooltip,
} from '@fluentui/react-components';

import {
  bundleIcon,
  Home24Filled,
  Home24Regular,
  Open24Regular,
  ChevronRight16Regular,
  TableAdd24Regular,
  DocumentTable24Regular,
  Play24Filled,
  Play24Regular,
  DataBarVerticalAdd24Filled,
  DataBarVerticalAdd24Regular,
  PanelLeftContract24Regular,
  PanelLeftContract24Filled,
  PanelLeftExpand24Regular,
  PanelLeftExpand24Filled,
  AppFolder24Regular,
  AppFolder24Filled,
} from '@fluentui/react-icons';

import { VegaLite } from 'react-vega';
import { Gallery } from './gallery';
import { Home } from './home';
import { Header } from './header';
import { DataTable } from './data';
import {
  languageName,
  _reducer,
  _initState,
  fetchData,
  Session,
  nav,
  SessionStates,
  onEditorMount,
  RestoreSession,
  restore,
  loadUrlAsync,
} from './controller';
import { setBackend } from '@tensorflow/tfjs';

setBackend('cpu');

const useStyles = makeStyles({
  textarea: {
    height: '200px',
    width: '600px',
  },
});

export function App() {
  const [state, dispatch] = useReducer(_reducer, _initState);
  const [width, setWidth] = useState(window.innerHeight);
  const [height, setHeight] = useState(window.innerHeight);
  const textareaId = useId('textarea');
  const styles = useStyles();

  const {
    navKey,
    asyncDataUrl,
    isLoading,
    dataText,
    dataset,
    sessionState,
    session,
    naturalLanguageEditor,
    fileKey,
    defaultValue,
    showDetails,
    restoreSession,
    pivotValue,
    vegaJson,
  } = state;

  const data = session?.data;
  const editorLoaded = !!naturalLanguageEditor;
  const interpretations = session?.interpretations ?? [];
  const csvFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => fetchData(asyncDataUrl, dispatch), [asyncDataUrl]);

  useEffect(() => restore(restoreSession, dispatch), [restoreSession]);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });

  useEffect(() => {
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  });

  const onMessage = (evt: MessageEvent<Session>) => {
    const data = evt.data;
    if (data.source !== 'vistalk') return;

    if (typeof data.ack === 'boolean') {
      return;
    }
    evt.source?.postMessage({
      source: 'vistalk',
      ack: true,
    });

    const url = window.location.origin + window.location.pathname + data.data;
    const restoreSession: RestoreSession = {
      url,
      input: data.input,
    };
    dispatch({ type: 'restoreStart', restoreSession });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files && e.target.files.length > 0) {
      const text = await e.target.files[0].text();
      dispatch({ type: 'loadData', dataText: text });
    }
  };

  const Play24 = bundleIcon(Play24Filled, Play24Regular);
  const PanelLeftContract = bundleIcon(
    PanelLeftContract24Filled,
    PanelLeftContract24Regular
  );
  const PanelLeftExpand = bundleIcon(
    PanelLeftExpand24Filled,
    PanelLeftExpand24Regular
  );

  return (
    <>
      <Header goHome={() => nav('home', dispatch)} />
      <div style={{ position: 'fixed', top: 10, left: 200, color: '#666666' }}>
        {isLoading ? 'Loading' : ''}
      </div>
      <div
        style={{
          position: 'fixed',
          left: 120,
          top: 45,
          bottom: 30,
          right: 0,
          background: '#FAFAFA',
          overflowY: 'scroll',
        }}
      >
        {navKey === 'home' && <Home />}
        {navKey === 'gallery' && <Gallery />}
        {navKey === 'create' && (
          <>
            <div style={{ marginTop: 20, marginLeft: 30 }}>
              {(sessionState === SessionStates.None ||
                sessionState === SessionStates.TableParsed ||
                sessionState === SessionStates.TextLoaded) && (
                <>
                  <div>
                    <Label size="large">Add data to get started</Label>
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <Button
                      style={{
                        marginRight: 10,
                      }}
                      icon={<Open24Regular />}
                      onClick={() => {
                        csvFileRef.current?.click();
                      }}
                    >
                      Open a local csv/json file
                    </Button>
                    <Menu>
                      <MenuTrigger>
                        <MenuButton icon={<DocumentTable24Regular />}>
                          Sample datasets
                        </MenuButton>
                      </MenuTrigger>
                      <MenuPopover>
                        <MenuList>
                          <MenuItem
                            onClick={() =>
                              loadUrlAsync('assets/CarSales.csv', dispatch)
                            }
                          >
                            Car sales
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              loadUrlAsync('assets/ProductSales.csv', dispatch)
                            }
                          >
                            Product sales
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              loadUrlAsync('assets/Shopping.csv', dispatch)
                            }
                          >
                            Shopping
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              loadUrlAsync('assets/Stocks.csv', dispatch)
                            }
                          >
                            Stocks
                          </MenuItem>
                        </MenuList>
                      </MenuPopover>
                    </Menu>
                  </div>
                </>
              )}

              {(sessionState === SessionStates.None ||
                sessionState === SessionStates.TextLoaded) && (
                <div style={{ marginTop: 10 }}>
                  <Textarea
                    textarea={{ className: styles.textarea }}
                    id={textareaId}
                    size="medium"
                    appearance="outline"
                    placeholder="Paste csv here, open a local csv file or use samples dataset..."
                    value={dataText}
                    resize="none"
                    onChange={(e, d) =>
                      dispatch({ type: 'loadData', dataText: d.value })
                    }
                  />
                  <div style={{ marginTop: 20 }}>
                    <Button
                      icon={<TableAdd24Regular />}
                      appearance="primary"
                      style={{ marginRight: 10 }}
                      disabled={isLoading || dataText === ''}
                      onClick={() => dispatch({ type: 'parseData', dataText })}
                    >
                      Load data
                    </Button>
                  </div>
                </div>
              )}
              {navKey === 'create' &&
                sessionState === SessionStates.TableParsed &&
                dataset &&
                data &&
                data.length > 0 && (
                  <>
                    <div
                      className="tableHost"
                      style={{
                        marginTop: 10,
                        marginLeft: 0,
                        maxHeight: 300,
                        overflow: 'scroll',
                      }}
                    >
                      <DataTable dataset={dataset} data={data} />
                    </div>
                    <div style={{ marginLeft: 0, marginTop: 20 }}>
                      <Button
                        appearance="primary"
                        icon={<DataBarVerticalAdd24Filled />}
                        style={{ marginRight: 10 }}
                        disabled={isLoading}
                        onClick={() => {
                          if (dataset) {
                            dispatch({ type: 'createSession', dataset });
                          }
                        }}
                      >
                        Create Visualization
                      </Button>
                    </div>
                  </>
                )}
              <input
                style={{ display: 'none' }}
                ref={csvFileRef}
                type="file"
                accept=".csv, .json"
                key={'file_' + fileKey}
                onChange={handleFileUpload}
              />
            </div>
            {showDetails && (
              <Tooltip content="Hide details" relationship="label">
                <Button
                  style={{
                    position: 'fixed',
                    right: 20,
                    top: 54,
                    zIndex: 100,
                  }}
                  icon={<PanelLeftExpand />}
                  onClick={() => dispatch({ type: 'toggleShowDetails' })}
                ></Button>
              </Tooltip>
            )}
            {sessionState === SessionStates.SessionCreated && !showDetails && (
              <Tooltip content="Show details" relationship="label">
                <Button
                  style={{
                    position: 'fixed',
                    right: 20,
                    top: 54,
                    zIndex: 100,
                  }}
                  icon={<PanelLeftContract />}
                  onClick={() => dispatch({ type: 'toggleShowDetails' })}
                ></Button>
              </Tooltip>
            )}
            {showDetails && sessionState === SessionStates.SessionCreated && (
              <div
                style={{
                  position: 'fixed',
                  right: 0,
                  top: 45,
                  width: 500,
                  bottom: 40,
                  background: 'white',
                  borderLeft: '1px solid #e7e7e7e',
                  zIndex: 20,
                  overflow: 'auto',
                  boxShadow:
                    '0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108)',
                }}
              >
                <TabList
                  selectedValue={pivotValue}
                  onTabSelect={(d, v) =>
                    dispatch({ type: 'pivot', value: v.value as string })
                  }
                >
                  <Tab id="table" value="table">
                    Table
                  </Tab>
                  <Tab id="vega" value="vega">
                    Vega-Lite
                  </Tab>
                  <Tab id="interpretations" value="interpretations">
                    NL Interpretations
                  </Tab>
                </TabList>

                {pivotValue === 'table' &&
                  dataset &&
                  data &&
                  data.length > 0 && (
                    <DataTable dataset={dataset} data={data} />
                  )}
                {pivotValue === 'vega' && (
                  <Editor
                    height={height - 100}
                    defaultLanguage="json"
                    defaultValue=""
                    onChange={(value) =>
                      dispatch({ type: 'editVega', json: value ?? '{}' })
                    }
                    value={vegaJson}
                  />
                )}
                {pivotValue === 'interpretations' &&
                  interpretations &&
                  interpretations.length > 0 && (
                    <div style={{ marginLeft: 0, marginTop: 10 }}>
                      <Accordion collapsible>
                        {interpretations &&
                          interpretations
                            .filter((x) => x.input !== '')
                            .map((interpretation, idx) => (
                              <AccordionItem value={idx}>
                                <AccordionHeader>
                                  {interpretation.input}
                                </AccordionHeader>
                                <AccordionPanel>
                                  <div
                                    key={'interpretation_' + idx}
                                    style={{ marginLeft: 16 }}
                                  >
                                    <div
                                      style={{ marginTop: 0, marginLeft: 10 }}
                                    >
                                      <b>Commands:</b>
                                    </div>
                                    <pre
                                      style={{
                                        color: '#111',
                                        fontSize: 12,
                                        marginTop: 0,
                                        marginLeft: 20,
                                      }}
                                    >
                                      {JSON.stringify(
                                        interpretation.actions,
                                        null,
                                        2
                                      )}
                                    </pre>
                                    <div>
                                      <div
                                        style={{
                                          marginTop: 10,
                                          marginLeft: 10,
                                        }}
                                      >
                                        <b>Model Prediction:</b>
                                      </div>
                                      <div
                                        style={{
                                          marginTop: 8,
                                          marginBottom: 2,
                                          marginLeft: 20,
                                        }}
                                      >
                                        {interpretation.intents.join(', ')}
                                      </div>
                                      <table className="table-interpretation">
                                        <thead>
                                          <tr
                                            style={{
                                              background: 'rgb(68, 114, 196)',
                                              color: 'white',
                                              fontWeight: 'bold',
                                            }}
                                          >
                                            {interpretation.terms.map(
                                              (t, j) => (
                                                <td key={j}>{t.text}</td>
                                              )
                                            )}
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            {interpretation.terms.map(
                                              (t, j) => (
                                                <td key={j}>
                                                  <i>
                                                    <Tooltip
                                                      content={JSON.stringify(
                                                        t.entity
                                                      )}
                                                      relationship="label"
                                                    >
                                                      <Label>{t.tag}</Label>
                                                    </Tooltip>
                                                  </i>
                                                </td>
                                              )
                                            )}
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </AccordionPanel>
                              </AccordionItem>
                            ))}
                      </Accordion>

                      {isLoading && (
                        <div style={{ padding: '30px' }}>
                          <Spinner label="Loading..." />
                        </div>
                      )}
                    </div>
                  )}
              </div>
            )}
            {sessionState === SessionStates.SessionCreated && (
              <div
                style={{
                  position: 'fixed',
                  top: 44,
                  overflow: 'auto',
                  left: 140,
                  right: 0, //width < 1300 ? 300 : 500,
                  bottom: 34,
                }}
              >
                <div
                  style={{
                    marginLeft: 10,
                    marginTop: 16,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    verticalAlign: 'middle',
                  }}
                >
                  <Link
                    style={{ alignItems: 'center', fontSize: 16 }}
                    onClick={() => dispatch({ type: 'editData' })}
                  >
                    Add data to get started
                  </Link>
                  <ChevronRight16Regular
                    style={{ marginTop: 3, marginLeft: 2, marginRight: 2 }}
                  />
                  <Label size="large" style={{ marginTop: 1 }}>
                    Create chart using natural language
                  </Label>
                </div>
                <div
                  style={{
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Label style={{ color: '#666666' }}>
                    Natural language input:
                  </Label>
                </div>
                <div
                  style={{
                    width: 526,
                    marginLeft: 10,
                    marginTop: 8,
                  }}
                >
                  <div
                    style={{
                      border: '1px solid #cccccc',
                      background: 'white',
                      borderRadius: 4,
                      marginBottom: 10,
                      padding: 4,
                      paddingTop: 6,
                      boxShadow: `rgb(0 0 0 / 13%) 0px 3.2px 7.2px 0px, rgb(0 0 0 / 11%) 0px 0.6px 1.8px 0px`,
                    }}
                  >
                    <Editor
                      language={languageName}
                      defaultValue={defaultValue}
                      width={514}
                      height={120}
                      options={{
                        lineDecorationsWidth: 4,
                        scrollbar: {
                          vertical: 'auto',
                          verticalScrollbarSize: 8,
                          horizontal: 'auto',
                          horizontalScrollbarSize: 8,
                        },
                        automaticLayout: true,
                        contextmenu: false,
                        renderLineHighlight: 'none',
                        lineNumbers: 'off',
                        wordWrap: 'on',
                        autoClosingBrackets: 'never',
                        overviewRulerBorder: false,
                        quickSuggestions: true,
                        scrollBeyondLastLine: false,
                        minimap: { enabled: false },
                        selectionClipboard: false,
                        glyphMargin: false,
                        revealHorizontalRightPadding: 24,
                        find: {
                          seedSearchStringFromSelection: 'never',
                          autoFindInSelection: 'never',
                        },
                        suggestOnTriggerCharacters: true,
                        codeLens: false,
                        folding: false,
                        formatOnType: true,
                        wordBasedSuggestions: false,
                        fixedOverflowWidgets: true,
                      }}
                      onMount={(
                        e: monaco.editor.ICodeEditor,
                        m: typeof monaco
                      ): void => {
                        onEditorMount(session, dispatch, sessionState, e, m);
                      }}
                    />
                  </div>
                </div>

                <Tooltip content="Run" relationship="label">
                  <Button
                    style={{ marginBottom: 10, marginLeft: 10 }}
                    icon={<Play24 />}
                    disabled={!editorLoaded}
                    appearance={'secondary'}
                    onClick={() => {
                      if (naturalLanguageEditor) {
                        const model = naturalLanguageEditor.getModel();
                        if (model) {
                          dispatch({
                            type: 'run',
                            input: model.getLinesContent(),
                          });
                        }
                      }
                      //setRunPrimary(false);
                    }}
                  ></Button>
                </Tooltip>
                {editorLoaded && state.vegaSpec && (
                  <>
                    <div
                      style={{
                        marginLeft: 10,
                        marginTop: 12,
                      }}
                    >
                      <Label style={{ color: '#666666' }}>Chart:</Label>
                    </div>
                    <div
                      style={{
                        marginLeft: 10,
                        marginTop: 8,
                        background: '#ffffff',
                        display: 'inline-block',
                        borderRadius: 4,
                        boxShadow:
                          'rgb(0 0 0 / 13%) 0px 3.2px 7.2px 0px, rgb(0 0 0 / 11%) 0px 0.6px 1.8px 0px',
                        padding: 16,
                      }}
                    >
                      <VegaLite
                        spec={state.vegaSpec}
                        data={{ table: state.session?.data ?? [] }}
                      />
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>
      <div
        style={{
          position: 'fixed',
          background: '#f5f5f5',
          left: 0,
          top: 45,
          width: 120,
          bottom: 30,
          boxSizing: 'border-box',
          paddingTop: 4,
          paddingLeft: 4,
          borderRight: '1px solid #dddddd',
        }}
      >
        <TabList
          vertical
          defaultSelectedValue="home"
          selectedValue={navKey}
          onTabSelect={(e, data) => nav(data.value as string, dispatch)}
        >
          <Tab
            icon={navKey === 'home' ? <Home24Filled /> : <Home24Regular />}
            style={{ height: 46 }}
            value="home"
          >
            Home
          </Tab>
          <Tab
            icon={
              navKey === 'create' ? (
                <DataBarVerticalAdd24Filled />
              ) : (
                <DataBarVerticalAdd24Regular />
              )
            }
            style={{ height: 46 }}
            value="create"
          >
            Create
          </Tab>
          <Tab
            icon={
              navKey === 'gallery' ? (
                <AppFolder24Filled />
              ) : (
                <AppFolder24Regular />
              )
            }
            style={{ height: 46 }}
            value="gallery"
          >
            Gallery
          </Tab>
        </TabList>
      </div>
      <Footer />
    </>
  );
}

export default App;
