// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type {
  ColorEntity,
  DateTimeEntity,
  Entity,
  NumberEntity,
  StringEntity,
  Token,
} from './contracts';
import { hasWord } from './words';
import { normalize } from './normalize';

const months = new Map<string, number>([
  ['jan', 1],
  ['january', 1],
  ['feb', 2],
  ['february', 2],
  ['mar', 3],
  ['march', 3],
  ['apr', 4],
  ['april', 4],
  ['may', 5],
  ['jun', 6],
  ['june', 6],
  ['jul', 7],
  ['july', 7],
  ['aug', 8],
  ['august', 8],
  ['sep', 9],
  ['september', 9],
  ['oct', 10],
  ['october', 10],
  ['nov', 11],
  ['november', 11],
  ['dec', 12],
  ['december', 12],
]);

const numbers = new Map<string, number>([
  ['zero', 0],
  ['two', 2],
  ['three', 3],
  ['four', 4],
  ['five', 5],
  ['six', 6],
  ['seven', 7],
  ['eight', 8],
  ['nine', 9],
  ['ten', 10],
  ['eleven', 11],
  ['twelve', 12],
  ['dozen', 12],
  ['dozens', 12],
  ['thirteen', 13],
  ['fourteen', 14],
  ['fifteen', 15],
  ['sixteen', 16],
  ['seventeen', 17],
  ['eighteen', 18],
  ['nineteen', 19],
  ['twenty', 20],
  ['thirty', 30],
  ['forty', 40],
  ['fifty', 50],
  ['sixty', 60],
  ['seventy', 70],
  ['eighty', 80],
  ['ninety', 90],
  ['hundred', 100],
  ['thousand', 1000],
  ['million', 1000000],
  ['billion', 1000000000],
  ['trillion', 1000000000000],
  ['lakh', 100000],
  ['crore', 10000000],
  ['second', 2],
  ['secondary', 2],
  ['half', 2],
  ['third', 3],
  ['fourth', 4],
  ['quarter', 4],
  ['fifth', 5],
  ['sixth', 6],
  ['seventh', 7],
  ['eighth', 8],
  ['ninth', 9],
  ['tenth', 10],
  ['eleventh', 11],
  ['twelfth', 12],
  ['thirteenth', 13],
  ['fourteenth', 14],
  ['fifteenth', 15],
  ['sixteenth', 16],
  ['seventeenth', 17],
  ['eighteenth', 18],
  ['nineteenth', 19],
  ['twentieth', 20],
  ['thirtieth', 30],
  ['fortieth', 40],
  ['fiftieth', 50],
  ['sixtieth', 60],
  ['seventieth', 70],
  ['eightieth', 80],
  ['ninetieth', 90],
  ['hundredth', 100],
  ['thousandth', 1000],
  ['millionth', 1000000],
  ['billionth', 1000000000],
  ['trillionth', 1000000000000],
  ['firsts', 1],
  ['halves', 2],
  ['thirds', 3],
  ['fourths', 4],
  ['quarters', 4],
  ['fifths', 5],
  ['sixths', 6],
  ['sevenths', 7],
  ['eighths', 8],
  ['ninths', 9],
  ['tenths', 10],
  ['elevenths', 11],
  ['twelfths', 12],
  ['thirteenths', 13],
  ['fourteenths', 14],
  ['fifteenths', 15],
  ['sixteenths', 16],
  ['seventeenths', 17],
  ['eighteenths', 18],
  ['nineteenths', 19],
  ['twentieths', 20],
  ['thirtieths', 30],
  ['fortieths', 40],
  ['fiftieths', 50],
  ['sixtieths', 60],
  ['seventieths', 70],
  ['eightieths', 80],
  ['ninetieths', 90],
  ['hundredths', 100],
  ['thousandths', 1000],
  ['millionths', 1000000],
  ['billionths', 1000000000],
  ['trillionths', 1000000000000],
]);

export const colors = {
  AliceBlue: '#F0F8FF',
  AntiqueWhite: '#FAEBD7',
  Aqua: '#00FFFF',
  Aquamarine: '#7FFFD4',
  Azure: '#F0FFFF',
  Beige: '#F5F5DC',
  Bisque: '#FFE4C4',
  Black: '#000000',
  BlanchedAlmond: '#FFEBCD',
  Blue: '#0000FF',
  BlueViolet: '#8A2BE2',
  Brown: '#A52A2A',
  BurlyWood: '#DEB887',
  CadetBlue: '#5F9EA0',
  Chartreuse: '#7FFF00',
  Chocolate: '#D2691E',
  Coral: '#FF7F50',
  CornflowerBlue: '#6495ED',
  Cornsilk: '#FFF8DC',
  Crimson: '#DC143C',
  Cyan: '#00FFFF',
  DarkBlue: '#00008B',
  DarkCyan: '#008B8B',
  DarkGoldenRod: '#B8860B',
  DarkGray: '#A9A9A9',
  DarkGreen: '#006400',
  DarkKhaki: '#BDB76B',
  DarkMagenta: '#8B008B',
  DarkOliveGreen: '#556B2F',
  Darkorange: '#FF8C00',
  DarkOrchid: '#9932CC',
  DarkRed: '#8B0000',
  DarkSalmon: '#E9967A',
  DarkSeaGreen: '#8FBC8F',
  DarkSlateBlue: '#483D8B',
  DarkSlateGray: '#2F4F4F',
  DarkTurquoise: '#00CED1',
  DarkViolet: '#9400D3',
  DeepPink: '#FF1493',
  DeepSkyBlue: '#00BFFF',
  DimGray: '#696969',
  DodgerBlue: '#1E90FF',
  FireBrick: '#B22222',
  FloralWhite: '#FFFAF0',
  ForestGreen: '#228B22',
  Fuchsia: '#FF00FF',
  Gainsboro: '#DCDCDC',
  GhostWhite: '#F8F8FF',
  Gold: '#FFD700',
  GoldenRod: '#DAA520',
  Gray: '#808080',
  Green: '#008000',
  GreenYellow: '#ADFF2F',
  HoneyDew: '#F0FFF0',
  HotPink: '#FF69B4',
  IndianRed: '#CD5C5C',
  Indigo: '#4B0082',
  Ivory: '#FFFFF0',
  Khaki: '#F0E68C',
  Lavender: '#E6E6FA',
  LavenderBlush: '#FFF0F5',
  LawnGreen: '#7CFC00',
  LemonChiffon: '#FFFACD',
  LightBlue: '#ADD8E6',
  LightCoral: '#F08080',
  LightCyan: '#E0FFFF',
  LightGoldenRodYellow: '#FAFAD2',
  LightGrey: '#D3D3D3',
  LightGreen: '#90EE90',
  LightPink: '#FFB6C1',
  LightSalmon: '#FFA07A',
  LightSeaGreen: '#20B2AA',
  LightSkyBlue: '#87CEFA',
  LightSlateGray: '#778899',
  LightSteelBlue: '#B0C4DE',
  LightYellow: '#FFFFE0',
  Lime: '#00FF00',
  LimeGreen: '#32CD32',
  Linen: '#FAF0E6',
  Magenta: '#FF00FF',
  Maroon: '#800000',
  MediumAquaMarine: '#66CDAA',
  MediumBlue: '#0000CD',
  MediumOrchid: '#BA55D3',
  MediumPurple: '#9370D8',
  MediumSeaGreen: '#3CB371',
  MediumSlateBlue: '#7B68EE',
  MediumSpringGreen: '#00FA9A',
  MediumTurquoise: '#48D1CC',
  MediumVioletRed: '#C71585',
  MidnightBlue: '#191970',
  MintCream: '#F5FFFA',
  MistyRose: '#FFE4E1',
  Moccasin: '#FFE4B5',
  NavajoWhite: '#FFDEAD',
  Navy: '#000080',
  OldLace: '#FDF5E6',
  Olive: '#808000',
  OliveDrab: '#6B8E23',
  Orange: '#FFA500',
  OrangeRed: '#FF4500',
  Orchid: '#DA70D6',
  PaleGoldenRod: '#EEE8AA',
  PaleGreen: '#98FB98',
  PaleTurquoise: '#AFEEEE',
  PaleVioletRed: '#D87093',
  PapayaWhip: '#FFEFD5',
  PeachPuff: '#FFDAB9',
  Peru: '#CD853F',
  Pink: '#FFC0CB',
  Plum: '#DDA0DD',
  PowderBlue: '#B0E0E6',
  Purple: '#800080',
  Red: '#FF0000',
  RosyBrown: '#BC8F8F',
  RoyalBlue: '#4169E1',
  SaddleBrown: '#8B4513',
  Salmon: '#FA8072',
  SandyBrown: '#F4A460',
  SeaGreen: '#2E8B57',
  SeaShell: '#FFF5EE',
  Sienna: '#A0522D',
  Silver: '#C0C0C0',
  SkyBlue: '#87CEEB',
  SlateBlue: '#6A5ACD',
  SlateGray: '#708090',
  Snow: '#FFFAFA',
  SpringGreen: '#00FF7F',
  SteelBlue: '#4682B4',
  Tan: '#D2B48C',
  Teal: '#008080',
  Thistle: '#D8BFD8',
  Tomato: '#FF6347',
  Turquoise: '#40E0D0',
  Violet: '#EE82EE',
  Wheat: '#F5DEB3',
  White: '#FFFFFF',
  WhiteSmoke: '#F5F5F5',
  Yellow: '#FFFF00',
  YellowGreen: '#9ACD32',
};

const colorsMap = new Map<string, string>();
for (const item of Object.entries(colors)) {
  const camel = item[0]
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .toLowerCase();
  if (!hasWord(item[0].toLowerCase())) {
    colorsMap.set(item[0].toLowerCase(), item[1]);
  }
  if (!hasWord(camel)) colorsMap.set(camel, item[1]);
}

function strExpr(r: RegExpExecArray): StringEntity {
  return { type: 'string', value: r[1] };
}

function numberExpr(r: RegExpExecArray): NumberEntity {
  let s = r[0];
  if (s.startsWith('no.')) s = s.substring(3);

  const val = parseFloat(s.replace(/[^-.0-9]/g, ''));
  return { type: 'number', value: val };
}

function percentExpr(r: RegExpExecArray): NumberEntity {
  const val = parseFloat(r[0]) / 100;
  return { type: 'number', value: val };
}

function numberKExpr(r: RegExpExecArray): NumberEntity {
  const val = parseFloat(r[0]) * 1000;
  return { type: 'number', value: val };
}

function numberMExpr(r: RegExpExecArray): NumberEntity {
  const val = parseFloat(r[0]) * 1000 * 1000;
  return { type: 'number', value: val };
}

function numberBExpr(r: RegExpExecArray): NumberEntity {
  const val = parseFloat(r[0]) * 1000 * 1000 * 1000;
  return { type: 'number', value: val };
}

function strNumberExpr(r: RegExpExecArray): NumberEntity {
  const val = numbers.get(r[0].toLowerCase()) ?? -1;
  return { type: 'number', value: val, strNum: true };
}

function strColorExpr(r: RegExpExecArray): ColorEntity {
  const val = colorsMap.get(r[0]) ?? 'black';
  return { type: 'color', color: val };
}

function relativeDateExpr(r: RegExpExecArray): DateTimeEntity {
  const year = new Date(Date.now()).getFullYear();
  const month = new Date(Date.now()).getMonth();
  switch (r[0]) {
    case 'last year':
    case 'past year':
      return { type: 'datetime', value: `${year}-01-01T00:00:00` };

    case 'this year':
      return { type: 'datetime', value: `${year}-01-01T00:00:00` };

    case 'last month':
    case 'past month':
      return { type: 'datetime', value: `${year}-${month}-01T00:00:00` };
  }

  return { type: 'datetime', value: r[0] };
}

function dateExpr(r: RegExpExecArray): DateTimeEntity {
  const mon = months.get(r[1].toLowerCase()) ?? -1;
  const monStr = mon.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const day = parseInt(r[2], 10);
  const dayStr = day.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const year = r[3];
  return { type: 'datetime', value: `${year}-${monStr}-${dayStr}T00:00:00` };
}

function dateMDYExpr(r: RegExpExecArray): DateTimeEntity {
  const mon = parseInt(r[1], 10);
  const monStr = mon.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const day = parseInt(r[2], 10);
  const dayStr = day.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const year = r[3];
  return { type: 'datetime', value: `${year}-${monStr}-${dayStr}T00:00:00` };
}

function dateYMDExpr(r: RegExpExecArray): DateTimeEntity {
  const mon = parseInt(r[2], 10);
  const monStr = mon.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const day = parseInt(r[3], 10);
  const dayStr = day.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const year = r[1];
  return { type: 'datetime', value: `${year}-${monStr}-${dayStr}T00:00:00` };
}

function monthExpr(r: RegExpExecArray): DateTimeEntity {
  const mon = months.get(r[1].toLowerCase()) ?? -1;
  const monStr = mon.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const year = new Date(Date.now()).getFullYear();
  return { type: 'datetime', value: `${year}-${monStr}-01T00:00:00` };
}

function dayMonthExpr(r: RegExpExecArray): DateTimeEntity {
  const day = parseInt(r[1], 10);
  const dayStr = day.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const mon = months.get(r[2].toLowerCase()) ?? -1;
  const monStr = mon.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const year = new Date(Date.now()).getFullYear();
  return { type: 'datetime', value: `${year}-${monStr}-${dayStr}T00:00:00` };
}

function monthYearExpr(r: RegExpExecArray): DateTimeEntity {
  const mon = months.get(r[1].toLowerCase()) ?? -1;
  const monStr = mon.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const year = r[2];
  return { type: 'datetime', value: `${year}-${monStr}-01T00:00:00` };
}

interface Parser {
  key: string;
  regex: RegExp;
  buildEntity?: (r: RegExpExecArray) => Entity;
}

const parsers: Parser[] = [
  {
    key: 'color',
    buildEntity: (r: RegExpExecArray) => ({ type: 'color', color: r[0] }),
    regex: /^#([0-9a-f]+)\b/,
  },
  { key: 'whitespace', regex: /^[\s\t\r\n\u25A0\u00A0]+/ },
  {
    key: 'date',
    buildEntity: dateExpr,
    regex:
      /^(jan(?:uary){0,1}|feb(?:ruary){0,1}|mar(?:ch){0,1}|apr(?:il){0,1}|may|jun(?:e){0,1}|jul(?:y){0,1}|aug(?:ust){0,1}|sep(?:tember){0,1}|oct(?:ober){0,1}|nov(?:ember){0,1}|dec(?:ember){0,1})[.,\s]+(\d{1,2})(?:th|nd|st|rd)?,?[.,\s]+(\d{4})\b/,
  },
  {
    key: 'date',
    buildEntity: (r: RegExpExecArray) => {
      const mon = months.get(r[1].toLowerCase()) ?? -1;
      const monStr = mon.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      const day = parseInt(r[2], 10);
      const dayStr = day.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      const year = new Date(Date.now()).getFullYear();
      return { type: 'datetime', value: `${year}-${monStr}-${dayStr}T00:00:00` };
    },
    regex:
      /^(jan(?:uary){0,1}|feb(?:ruary){0,1}|mar(?:ch){0,1}|apr(?:il){0,1}|may|jun(?:e){0,1}|jul(?:y){0,1}|aug(?:ust){0,1}|sep(?:tember){0,1}|oct(?:ober){0,1}|nov(?:ember){0,1}|dec(?:ember){0,1})[.,\s]+(\d{1,2})(?:th|nd|st|rd)?\b/,
  },
  {
    // January, 2010
    key: 'date',
    buildEntity: (r: RegExpExecArray) => {
      const mon = months.get(r[1].toLowerCase()) ?? -1;
      const monStr = mon.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      const year = parseInt(r[2], 10);
      return { type: 'datetime', value: `${year}-${monStr}-01T00:00:00` };
    },
    regex:
      /^(jan(?:uary){0,1}|feb(?:ruary){0,1}|mar(?:ch){0,1}|apr(?:il){0,1}|may|jun(?:e){0,1}|jul(?:y){0,1}|aug(?:ust){0,1}|sep(?:tember){0,1}|oct(?:ober){0,1}|nov(?:ember){0,1}|dec(?:ember){0,1})[.,\s]+(\d{4})\b/,
  },
  {
    key: 'date',
    buildEntity: relativeDateExpr,
    regex: /^(?:last|past)\s+(month(?:s){0,1}|year(?:s){0,1}|week(?:s){0,1})\b/,
  },
  {
    key: 'date',
    buildEntity: dateMDYExpr,
    regex: /^(\d{1,2})[-/](\d{1,2})[-/](\d{4})\b/,
  },
  {
    key: 'date',
    buildEntity: dateYMDExpr,
    regex: /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})\b/,
  },
  {
    key: 'date',
    buildEntity: (r: RegExpExecArray) => {
      const year = r[1];
      const mon = parseInt(r[2]);
      let monStr = mon.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      const dayInt = parseInt(r[3]);
      let day = dayInt.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      if (mon > 12) {
        const t = monStr;
        monStr = day;
        day = t;
      }
      
      const hour = parseInt(r[4]).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      const min = parseInt(r[5]).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      const sec = parseInt(r[6]).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      return { type: 'datetime', value:`${year}-${monStr}-${day}T${hour}:${min}:${sec}`};
    },
    // 2003-04-19 15:06:20'
    regex: /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})/,
  },
  {
    key: 'date',
    buildEntity: (r: RegExpExecArray) => {
      return { type: 'datetime', value: r[0] };
    },
    regex: /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2}) \d{1,2}:\d{1,2}\b/,
  },
  // 5/10/2015 10:45
  {
    key: 'date',
    buildEntity: (r: RegExpExecArray) => {
      return { type: 'datetime', value: r[0] };
    },
    regex: /^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4}) \d{1,2}:\d{1,2}\b/,
  },
  {
    key: 'date',
    buildEntity: (r) => {
      const today = new Date(Date.now());
      const yesterday = new Date(today.setDate(today.getDate() - 1));
      const year = yesterday.getFullYear();
      const month = yesterday.getMonth() + 1;
      const day = yesterday.getDate();
      return { type: 'datetime', value: `${year}-${month}-${day}` };
    },
    regex: /^(?:yesterday)\b/,
  },
  {
    key: 'date',
    buildEntity: (r) => {
      const today = new Date(Date.now());
      const year = today.getFullYear();
      return { type: 'datetime', value: `${year}-01-01` };
    },
    regex: /^(?:this year)\b/,
  },
  {
    key: 'date',
    buildEntity: monthExpr,
    regex:
      /^(jan(?:uary){0,1}|feb(?:ruary){0,1}|mar(?:ch){0,1}|apr(?:il){0,1}|may|jun(?:e){0,1}|jul(?:y){0,1}|aug(?:ust){0,1}|sep(?:tember){0,1}|oct(?:ober){0,1}|nov(?:ember){0,1}|dec(?:ember){0,1})\b/,
  },
  {
    key: 'date',
    buildEntity: dayMonthExpr,
    regex:
      /^(\d{1,2})(?:th|nd|st|rd)?[.,\-\s]+(jan(?:uary){0,1}|feb(?:ruary){0,1}|mar(?:ch){0,1}|apr(?:il){0,1}|may|jun(?:e){0,1}|jul(?:y){0,1}|aug(?:ust){0,1}|sep(?:tember){0,1}|oct(?:ober){0,1}|nov(?:ember){0,1}|dec(?:ember){0,1})\b/,
  },
  {
    key: 'date',
    buildEntity: monthYearExpr,
    regex:
      /^(jan(?:uary){0,1}|feb(?:ruary){0,1}|mar(?:ch){0,1}|apr(?:il){0,1}|may|jun(?:e){0,1}|jul(?:y){0,1}|aug(?:ust){0,1}|sep(?:tember){0,1}|oct(?:ober){0,1}|nov(?:ember){0,1}|dec(?:ember){0,1})(?:[.\s]|\s+of\s+)(\d{4})\b/,
  },
  {
    key: 'number',
    buildEntity: numberExpr,
    regex:
      /^(-?)((?:no\.)?(?:(?:[0-9]+\.[0-9]*)|(?:[0-9]*\.[0-9]+)|(?:[0-9]{1,3}(?:,[0-9]{3})*))|(?:[0-9]+))(?:[eE][+-]?[0-9]+)?\b/,
  },
  { key: 'number', buildEntity: percentExpr, regex: /^(\d+|\d+[.]\d+)%/ },
  { key: 'number', buildEntity: percentExpr, regex: /^(\d+|\d+[.]\d+) (percent|percents)/ },
  { key: 'number', buildEntity: numberKExpr, regex: /^([0-9]+)k\b/ },
  { key: 'number', buildEntity: numberMExpr, regex: /^([0-9]+)m\b/ },
  { key: 'number', buildEntity: numberBExpr, regex: /^([0-9]+)b\b/ },
  {
    key: 'number',
    buildEntity: numberExpr,
    regex: /^([0-9]+)(?:th|st|nd|rd)\b/,
  },
  {
    key: 'number',
    buildEntity: strNumberExpr,
    regex:
      /^(seventeenths|seventeenth|thirteenths|fourteenths|eighteenths|nineteenths|seventieths|thousandths|trillionths|thirteenth|fourteenth|eighteenth|nineteenth|seventieth|thousandth|trillionth|fifteenths|sixteenths|twentieths|thirtieths|eightieths|ninetieths|hundredths|millionths|billionths|seventeen|secondary|fifteenth|sixteenth|twentieth|thirtieth|eightieth|ninetieth|hundredth|millionth|billionth|elevenths|fortieths|fiftieths|sixtieths|thirteen|fourteen|eighteen|nineteen|thousand|trillion|eleventh|fortieth|fiftieth|sixtieth|quarters|sevenths|twelfths|fifteen|sixteen|seventy|hundred|million|billion|quarter|seventh|twelfth|fourths|eighths|eleven|twelve|dozens|twenty|thirty|eighty|ninety|second|fourth|eighth|firsts|halves|thirds|fifths|sixths|ninths|tenths|three|seven|eight|dozen|forty|fifty|sixty|crore|third|fifth|sixth|ninth|tenth|zero|four|five|nine|lakh|half|two|six|ten)\b/,
  },
  {
    key: 'color',
    buildEntity: strColorExpr,
    regex:
      /^(aliceblue|alice blue|antiquewhite|antique white|aqua|aquamarine|azure|beige|bisque|blanchedalmond|blanched almond|blueviolet|blue violet|burlywood|burly wood|cadetblue|cadet blue|chartreuse|chocolate|coral|cornflowerblue|cornflower blue|cornsilk|crimson|darkblue|dark blue|darkcyan|dark cyan|darkgoldenrod|dark golden rod|darkgray|dark gray|darkgreen|dark green|darkkhaki|dark khaki|darkmagenta|dark magenta|darkolivegreen|dark olive green|darkorange|darkorchid|dark orchid|darkred|dark red|darksalmon|dark salmon|darkseagreen|dark sea green|darkslateblue|dark slate blue|darkslategray|dark slate gray|darkturquoise|dark turquoise|darkviolet|dark violet|deeppink|deep pink|deepskyblue|deep sky blue|dimgray|dim gray|dodgerblue|dodger blue|firebrick|fire brick|floralwhite|floral white|forestgreen|forest green|fuchsia|gainsboro|ghostwhite|ghost white|goldenrod|golden rod|greenyellow|green yellow|honeydew|honey dew|hotpink|hot pink|indianred|indian red|indigo|ivory|khaki|lavender|lavenderblush|lavender blush|lawngreen|lawn green|lemonchiffon|lemon chiffon|lightblue|light blue|lightcoral|light coral|lightcyan|light cyan|lightgoldenrodyellow|light golden rod yellow|lightgrey|light grey|lightgreen|light green|lightpink|light pink|lightsalmon|light salmon|lightseagreen|light sea green|lightskyblue|light sky blue|lightslategray|light slate gray|lightsteelblue|light steel blue|lightyellow|light yellow|lime|limegreen|lime green|linen|magenta|maroon|mediumaquamarine|medium aqua marine|mediumblue|medium blue|mediumorchid|medium orchid|mediumpurple|medium purple|mediumseagreen|medium sea green|mediumslateblue|medium slate blue|mediumspringgreen|medium spring green|mediumturquoise|medium turquoise|mediumvioletred|medium violet red|midnightblue|midnight blue|mintcream|mint cream|mistyrose|misty rose|moccasin|navajowhite|navajo white|navy|oldlace|old lace|olive|olivedrab|olive drab|orangered|orange red|orchid|palegoldenrod|pale golden rod|palegreen|pale green|paleturquoise|pale turquoise|palevioletred|pale violet red|papayawhip|papaya whip|peachpuff|peach puff|peru|plum|powderblue|powder blue|rosybrown|rosy brown|royalblue|royal blue|saddlebrown|saddle brown|salmon|sandybrown|sandy brown|seagreen|sea green|seashell|sea shell|sienna|silver|skyblue|sky blue|slateblue|slate blue|slategray|slate gray|snow|springgreen|spring green|steel blue|tan|teal|thistle|tomato|turquoise|violet|wheat|whitesmoke|white smoke|yellowgreen|yellow green)\b/,
  },
  { key: 'word', regex: /^'\b/ },
  { key: 'word', regex: /^"\b/ },
  { key: 'word', regex: /^\w+\b/ },
  { key: 'word', regex: /^(aren|didn|does|don|isn|doesn|weren)'t\b/ },
  { key: 'string', buildEntity: strExpr, regex: /^"(((\\")|[^"(\\")])+)"/ },
  {
    key: 'parameter', buildEntity: (r: RegExpExecArray) => {
      return { type: 'parameter', name: r[1] };
    }, regex: /^{([^}]*)}/
  },
  {
    key: 'term', buildEntity: (r: RegExpExecArray) => {
      return { type: 'term', name: r[1] };
    }, regex: /^<([^>]*)>/
  },
  { key: 'other', regex: /^./ },
];

export const MAX_TOKENS = 50;


/**
 * Tokenize input string to tokens.
 *
 * @export
 * @param {string} input Natural language input.
 * @return {*}  {Token[]}
 */
export function tokenize(input: string): Token[] {
  let s = input;
  let m = 0;
  let r: RegExpExecArray | null = null;
  let t: Token | null = null;
  const tokens: Token[] = [];
  let start = 0;

  while (s) {
    t = null;
    m = 0;
    for (const parser of parsers) {
      r = parser.regex.exec(s);
      if (r && r[0].length > m) {
        const key = parser.key;
        const text = r[0].toLowerCase();
        let term = text;

        switch (key) {
          case 'string':
            term = '<string>';
            break;

          case 'number':
            term = '<number>';
            break;

          case 'date':
            term = '<date>';
            break;

          case 'color':
            term = '<color>';
            break;
        }

        t = {
          text,
          norm: normalize(text),
          term,
          type: key,
          start,
          entity: { type: 'core', text },
          length: text.length,
          tag: 'O',
        };

        if (parser.buildEntity) {
          const entity = parser.buildEntity(r);
          if (entity) {
            t.entity = entity;
          }
        }

        m = r[0].length;
      }
    }
    if (t && t.type !== 'whitespace') {
      // push current token onto sequence

      // merge number
      const prev = tokens.length > 0 ? tokens[tokens.length - 1] : undefined;
      const prev2 = tokens.length > 1 ? tokens[tokens.length - 2] : undefined;
      if (
        prev &&
        prev.entity.type === 'number' &&
        t.entity.type === 'number' &&
        (prev.entity.strNum || t.entity.strNum)
      ) {
        if (t.entity.value % 100 === 0 && prev.entity.value % 100 === 0) {
          prev.entity.value *= t.entity.value;
        } else {
          prev.entity.value += t.entity.value;
        }
        prev.length = t.start + t.length - prev.start + 1;
        prev.entity.strNum = true;
      } else if (
        prev &&
        prev2 &&
        prev2.entity.type === 'number' &&
        prev.text === 'and' &&
        t.entity.type === 'number' &&
        (prev2.entity.strNum || t.entity.strNum)
      ) {
        // two hundred and six
        prev2.entity.strNum = true;
        prev2.entity.value += t.entity.value;
        prev2.length = t.start + t.length - prev2.start + 1;
        tokens.length = tokens.length - 1;
      } else {
        tokens.push(t);
      }
    }
    s = s.substring(m);
    start += m;
  }

  return tokens;
}
