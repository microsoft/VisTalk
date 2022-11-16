// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import {
  Column,
  ValueMatch,
  DataContext,
  ColumnMatch,
  Token,
  DataCategory,
  DataType,
  DataSource,
  AggregationType,
  Field,
  ColumnStar,
} from './contracts';
import { normalize } from './normalize';
import { tokenize } from './tokenize';
import { hasWord } from './words';
import { isEqual } from 'lodash';

const boolVals = new Set<string>(['y', 'n', 't', 'f', 'yes', 'no']);
const boolTrueVals = new Set<string>(['y', 't', 'yes']);

const countries = new Map<string, string>([
  ['united states', 'usa'],
  ['united kingdom', 'uk'],
]);

const similar = new Map<string, string>([['MPG', 'miles per gallon']]);

function toField(c: Column): Field {
  return { name: c.name, dataCategory: c.dataCategory, defaultAggregate: c.defaultAggregate, dataType: c.dataType };
}


export class DataProvider implements DataContext {
  public columns: Column[];
  public date: string | null;
  public measure: string | null;

  private readonly lookupValuePrefixDict: Map<string, ValueMatch[]>;
  private readonly lookupColumnPrefixDict: Map<string, ColumnMatch[]>;

  public constructor(dataSource: DataSource) {
    this.columns = [];
    this.lookupValuePrefixDict = new Map<string, ValueMatch[]>();
    this.lookupColumnPrefixDict = new Map<string, ColumnMatch[]>();
    this.measure = null;
    this.loadData(dataSource);
    const exactMatches = new Set<string>();
    this.columns.forEach((c: Column) => {
      const name = c.name.toLowerCase();
      exactMatches.add(name);

      const normalized = normalize(name);
      if (normalized !== name) exactMatches.add(normalized);
    });

    let date: string | null = null;
    let year: string | null = null;
    this.columns.forEach((c: Column) => {
      if (!date && c.dataType === 'datetime') {
        date = c.name;
      }
      if (!year && c.dataType === 'datetime' && c.dataCategory === 'years') {
        year = c.name;
        this.indexColumnTokens(c, this.lookupColumnPrefixDict, ['year'], false);
      }

      const s = similar.get(c.name);
      if (s) {
        this.indexColumnTokens(
          c,
          this.lookupColumnPrefixDict,
          tokenize(s).map((x) => x.text),
          false
        );
      }

      if (
        c.lookupValues &&
        Array.from(c.lookupValues).filter((x) => x !== '').length > 0 &&
        Array.from(c.lookupValues).every(
          (x) => x && typeof x === 'string' && boolVals.has(x.toLowerCase())
        )
      ) {
        // bool val
        const name = c.name.toLowerCase().trim();
        const tokens = tokenize(name).map((x) => x.text.toLowerCase());
        const trueVal = Array.from(c.lookupValues).filter((x) => boolTrueVals.has(x))[0];
        const match: ValueMatch = {
          field: c,
          tokens,
          filter: {
            isNot: false,
            subject: c,
            operator: '=',
            target: { type: 'string', value: trueVal }
          },
          boolMatch: true,
          exact: true,
        };
        this.lookupValuePrefixDict.set(tokens[0], [match]);
      } else {
        // convert PascalCase to pascal case
        const camel = c.name.trim()
          .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
          .toLowerCase();
        this.indexColumn(camel, c);

        const name = c.name.toLowerCase().trim();
        this.indexColumn(name, c);
      }

      if (c.lookupValues) {
        c.lookupValues.forEach((v) => {
          const original = v;
          this.indexValue(original, c);

          const country = countries.get(v);
          if (country) {
            if (!this.lookupValuePrefixDict.has(country)) {
              const match: ValueMatch = {
                field: c,
                boolMatch: false,
                tokens: [country],
                exact: false,
                filter: {
                  isNot: false,
                  subject: c,
                  operator: '=',
                  target: { type: 'string', value: v },
                },
              };
              this.lookupValuePrefixDict.set(country, [match]);
            }
          }
        });
      }
    });

    for (const c of this.columns) {
      if (c.name.toLowerCase().trim().endsWith('name')) {
        this.indexColumn('name', c);
        break;
      }
    }

    for (const c of this.columns) {
      if (
        c.name.endsWith('ID') ||
        c.name.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
          .toLowerCase()
          .endsWith('id')
      ) {
        this.indexColumn('id', c);
        break;
      }
    }

    if (!date && year) {
      date = year;
    }

    this.date = date;
  }

  public getField(name: string): Field {
    const cols = this.columns.filter(x => x.name === name);
    if (cols.length === 0) {
      console.error("failed to get field : " + name);
    }
    return cols.length > 0 ? 
      { name: cols[0].name, dataType: cols[0].dataType, dataCategory: cols[0].dataCategory, defaultAggregate: cols[0].defaultAggregate } : ColumnStar;
  }

  public matchColumn(tokens: Token[], i: number): ColumnMatch | null {
    let matched: ColumnMatch | null = null;
    const text = tokens[i].text;
    let prefix = this.lookupColumnPrefixDict.get(text);

    if (!prefix) prefix = this.lookupColumnPrefixDict.get(normalize(text));

    if (prefix) {
      let longest = 0;
      prefix.forEach((p) => {
        if (!p.exact) return;

        let match = true;
        p.tokens.forEach((t, j) => {
          if (i + j > tokens.length - 1) {
            match = false;
            return;
          }

          if (!DataProvider.is_token_same(t, tokens[i + j], true)) {
            match = false;
            return;
          }
        });

        if (match) {
          if (longest < p.tokens.length) {
            longest = p.tokens.length;
            matched = p;
          }
        }
      });

      prefix.forEach((p) => {
        let match = true;
        p.tokens.forEach((t, j) => {
          if (i + j > tokens.length - 1) {
            match = false;
            return;
          }

          if (!DataProvider.is_token_same(t, tokens[i + j], false)) {
            match = false;
            return;
          }
        });

        if (match) {
          if (longest < p.tokens.length) {
            longest = p.tokens.length;
            matched = p;
          }
        }
      });

      if (longest === 0) {
        prefix.forEach((p) => {
          let match = true;
          p.tokens.forEach((t, j) => {
            if (i + j > tokens.length - 1) {
              match = false;
              return;
            }

            if (DataProvider.edit_distance(t, tokens[i + j].text) >= 2) {
              match = false;
              return;
            }
          });

          if (match) {
            if (longest < p.tokens.length) {
              longest = p.tokens.length;
              matched = p;
            }
          }
        });
      }
    }

    return matched;
  }

  public matchValue(tokens: Token[], i: number): ValueMatch | null {
    let matched: ValueMatch | null = null;
    const text = tokens[i].text;
    let prefix = this.lookupValuePrefixDict.get(text);
    if (!prefix) {
      prefix = this.lookupValuePrefixDict.get(normalize(text));
    }

    if (prefix) {
      let longest = 0;
      prefix.forEach((p) => {
        if (!p.exact) return;

        let match = true;
        p.tokens.forEach((t, j) => {
          if (i + j > tokens.length - 1) {
            match = false;
            return;
          }

          if (!DataProvider.is_token_same(t, tokens[i + j], true)) {
            match = false;
            return;
          }
        });

        if (match) {
          if (longest < p.tokens.length) {
            longest = p.tokens.length;
            matched = p;
          }
        }
      });

      if (longest === 0) {
        prefix.forEach((p) => {
          let match = true;
          p.tokens.forEach((t, j) => {
            if (i + j > tokens.length - 1) {
              match = false;
              return;
            }

            if (!DataProvider.is_token_same(t, tokens[i + j], false)) {
              match = false;
              return;
            }
          });

          if (match) {
            if (longest < p.tokens.length) {
              longest = p.tokens.length;
              matched = p;
            }
          }
        });
      }
    }

    return matched;
  }

  private indexColumnTokens(
    c: Column,
    lookupColumnPrefixDict: Map<string, ColumnMatch[]>,
    columnTokens: string[],
    exact: boolean
  ) {
    const prefix = columnTokens[0];
    if (!lookupColumnPrefixDict.has(prefix)) {
      lookupColumnPrefixDict.set(prefix, []);
    }

    const current = lookupColumnPrefixDict.get(prefix);
    if (current) {
      current.push({ field: toField(c), tokens: columnTokens, exact });
      lookupColumnPrefixDict.set(prefix, current);
    }
  }

  private indexColumn(name: string, c: Column) {
    const columnTokens = tokenize(name).map((x) => x.text);
    this.indexColumnTokens(c, this.lookupColumnPrefixDict, columnTokens, true);
    this.indexColumnTokens(
      c,
      this.lookupColumnPrefixDict,
      columnTokens.map((x) => normalize(x)),
      false
    );

    if (columnTokens.length > 1) {
      for (const token of columnTokens) {
        if (!hasWord(token)) {
          this.indexColumnTokens(
            c,
            this.lookupColumnPrefixDict,
            [token],
            false
          );
        }
      }
    }
  }

  private indexValueTokens(
    original: string,
    c: Column,
    valueTokens: string[],
    exact: boolean
  ) {
    const prefix = valueTokens[0];
    if (!this.lookupValuePrefixDict.has(prefix)) {
      this.lookupValuePrefixDict.set(prefix, []);
    }

    const current = this.lookupValuePrefixDict.get(prefix);
    if (current) {
      current.push({
        field: toField(c),
        boolMatch: false,
        tokens: valueTokens,
        filter: {
          isNot: false,
          subject: toField(c),
          operator: '=',
          target: { type: 'string', value: original },
        },
        exact,
      });
      this.lookupValuePrefixDict.set(prefix, current);
    }
  }

  private indexValue(original: string, c: Column) {
    const text = original.trim();
    const tokens = tokenize(text).map((x) => x.text);
    this.indexValueTokens(original, c, tokens, true);
    this.indexValueTokens(
      original,
      c,
      tokens.map((x) => normalize(x)),
      false
    );
  }

  private loadData(dataSource: DataSource) {
    const rowCount = dataSource.length;
    const columns = new Array<Column>();
    let defaultMeasure: Column | null = null;
    const header = dataSource.columns ?? Object.keys(dataSource[0]);
    for (const columnName of header) {
      let dataCategory: DataCategory | undefined = undefined;
      let aggregateFunction: AggregationType | undefined = undefined;
      const lookup = new Set<string>();

      let numCount = 0;
      let blankCount = 0;
      let strCount = 0;
      let dateCount = 0;
      let yearCount = 0;
      let dataType: DataType = 'string';
      let maxValueLen = 0;
      const stats = new Set<string>();
      for (let row = 0; row < rowCount; row++) {
        const rowObject = dataSource[row] as { [index: string]: any };
        const cell = rowObject[columnName];
        stats.add(cell);

        if (typeof cell === 'string') {
          maxValueLen = Math.max(cell.length, maxValueLen);
        }

        if (typeof cell === 'number') {
          numCount++;
          if (columnName.toLowerCase().includes('year')) {
            if (cell > 1900 && cell < 2100) {
              yearCount++;
            }
            if (cell >= 0 && cell <= 99) {
              yearCount++;
            }
          }
        }

        if (typeof cell === 'string' && DataProvider.isNumber(cell)) {
          numCount++;
          if (columnName.toLowerCase().includes('year')) {
            if (/^\d{4}$/.test(cell)) {
              const v = parseInt(cell, 10);
              if (v > 1900 && v < 2100) {
                yearCount++;
              }
            }
            if (/^\d{2}$/.test(cell)) {
              const v = parseInt(cell, 10);
              if (v >= 0 && v <= 99) {
                yearCount++;
              }
            }
          }
        } else if (cell && cell instanceof Date) {
          dateCount++;
        } else if (DataProvider.isBlank(cell)) {
          blankCount++;
        } else if (typeof cell === 'string' && DataProvider.isDate(cell)) {
          dateCount++;
        } else if (typeof cell === 'string') {
          strCount++;
          lookup.add(cell);
        }
      }
      if (strCount > 0) {
        dataType = 'string';
      } else if (numCount + blankCount === rowCount) {
        if (yearCount === numCount) {
          dataType = 'datetime';
          dataCategory = 'years';
        } else {
          dataType = 'number';
          aggregateFunction = 'sum';
        }
      } else if (dateCount + blankCount === rowCount) {
        dataType = 'datetime';
      }
      
      // console.log({columnName,dateCount, yearCount, strCount, blankCount});
      
      const newCol: Column = {
        name: columnName,
        dataType: dataType,
        lookupValues: lookup,
        dataCategory: dataCategory,
        defaultAggregate: aggregateFunction,
        distinctValuesCount: stats.size,
        maxValueLen: maxValueLen,
      };
      columns.push(newCol);

      if (defaultMeasure === null && newCol.defaultAggregate) {
        defaultMeasure = newCol;
      }
    }

    const data = new Array<object>();
    for (let row = 0; row < rowCount; row++) {
      const rowObject = dataSource[row] as { [index: string]: any };
      const entries = new Array<[string, any]>();
      for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        switch (column.dataType) {
          case 'number':
            entries.push([column.name, parseFloat(rowObject[column.name])]);
            break;
          case 'datetime':
            if (column.dataCategory === 'years') {
              entries.push([column.name, rowObject[column.name] + '/1/1']);
            } else {
              entries.push([column.name, rowObject[column.name]]);
            }
            break;
          default:
            entries.push([column.name, rowObject[column.name]]);
            break;
        }
      }
      data.push(Object.fromEntries(entries));
    }

    this.columns = columns;
  }

  private static addColumnMatch(
    m: ColumnMatch | null,
    tokens: Token[],
    start: number,
    used: Set<number>
  ) {
    let i = start;
    if (!m) return i;

    for (let j = i + 1; j < i + m.tokens.length; j++) {
      tokens[j].type = 'hidden';
      used.add(j);
    }

    tokens[i].term =
      m.field.defaultAggregate ? '<measure>' : '<column>';
    tokens[i].entity = { type: 'field', field: m.field };
    tokens[i].text = m.tokens.join(' ');
    tokens[i].length = tokens[i].text.length;

    i += m.tokens.length - 1;
    used.add(i);
    return i;
  }

  private static addValueMatch(
    m: ValueMatch | null,
    tokens: Token[],
    start: number,
    used: Set<number>,
    subjectColumns: Set<string>
  ) {
    let i = start;
    if (!m) return i;

    for (let j = i + 1; j < i + m.tokens.length; j++) {
      tokens[j].type = 'hidden';
      used.add(j);
    }

    tokens[i].term = '<value>';
    tokens[i].entity = {
      type: 'filter',
      filter: m.filter,
    };
    tokens[i].text = m.tokens.join(' ');
    subjectColumns.add(m.filter.subject.name);

    i += m.tokens.length - 1;
    used.add(i);

    return i;
  }

  private static is_field(token: Token) {
    return token.entity.type === 'field';
  }

  public binding(tokens: Token[]): Token[] {
    const subjectColumns = new Set<string>();
    const used = new Set<number>();
    const mergedTokens: Token[] = [];

    for (let i = 0; i < tokens.length; i++) {
      if (used.has(i)) continue;
      const columnMatched = this.matchColumn(tokens, i);
      i = DataProvider.addColumnMatch(columnMatched, tokens, i, used);
      const valueMatched = this.matchValue(tokens, i);
      i = DataProvider.addValueMatch(
        valueMatched,
        tokens,
        i,
        used,
        subjectColumns
      );

      if (!columnMatched && !valueMatched && !hasWord(tokens[i].text)) {
        for (const col of this.columns) {
          const target = col.name.toLowerCase();
          const dist = DataProvider.edit_distance(target, tokens[i].text);
          if (dist <= 2) {
            i = DataProvider.addColumnMatch(
              { field: col, tokens: [tokens[i].text], exact: false },
              tokens,
              i,
              used
            );
            break;
          }
        }
      }
    }

    tokens.forEach((t) => {
      if (t.entity.type === 'field') {
        const key = t.entity.field.name;
        if (key && subjectColumns.has(key)) {
          t.term = '<column>';
        }
      }
    });

    for (const token of tokens) {
      if (token.type === 'hidden') {
        continue;
      }

      if (
        mergedTokens.length > 0 &&
        mergedTokens[mergedTokens.length - 1].term === '<string>' &&
        token.term === '<string>'
      ) {
        const last = mergedTokens[mergedTokens.length - 1];
        if (last.start + last.text.length === token.start) {
          last.text += token.text;
        } else {
          last.text += ' ' + token.text;
        }
        last.entity = {
          type: 'string',
          value: last.text,
        };
        continue;
      }

      // merge same entity
      if (
        mergedTokens.length > 0 &&
        DataProvider.is_field(mergedTokens[mergedTokens.length - 1]) &&
        DataProvider.is_field(token) &&
        isEqual(mergedTokens[mergedTokens.length - 1].entity, token.entity)
      ) {
        const last = mergedTokens[mergedTokens.length - 1];
        if (last.start + last.text.length === token.start) {
          last.text += token.text;
        } else {
          last.text += ' ' + token.text;
        }
        continue;
      }

      mergedTokens.push(token);
    }

    return mergedTokens;
  }
  
  private static is_token_same(text: string, token: Token, exact: boolean): boolean {
    if (exact) return text === token.text;
  
    return text === token.text || text === token.norm;
  }

  private static isBlank(a: string | number): boolean {
    return a === '' || a === null || a === '(blank)';
  }
  
  private static isNumber(s: string | undefined): boolean {
    if (s === undefined) return false;
  
    if (
      /^((?:(?:[0-9]+\.[0-9]*)|(?:[0-9]*\.[0-9]+)|(?:[0-9]{1,3}(?:,[0-9]{3})*))|(?:[0-9]+))(?:[eE][+-]?[0-9]+)?$/.test(
        s
      )
    ) {
      return true;
    }
  
    return /^-?[\d.]+(?:e-?\d+)?$/.test(s);
  }
  
  private static isDate(s: string | undefined): boolean {
    if (s === undefined) return false;
  
    if (/^(\d{1,2})[-/](\d{1,2})[-/](\d{2,4})$/.test(s)) return true;
  
    if (/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/.test(s)) return true;
  
    if (/(\d{1,2})[.-/](\d{1,2})[.-/](\d{4})\s+(\d{1,2}):(\d{1,2})$/.test(s)) {
      return true;
    }
  
    return false;
  }
  
private static edit_distance(a: string, b: string) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix: number[][] = [];

  // increment along the first column of each row
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  // increment each column in the first row
  for (let i = 0; i <= a.length; i++) {
    matrix[0][i] = i;
  }

  // Fill in the rest of the matrix
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1
          )
        ); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
}

}

export function createDataProvider(dataSource: DataSource): DataProvider {
  return new DataProvider(dataSource);
}