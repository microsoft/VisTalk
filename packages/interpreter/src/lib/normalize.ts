// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

/**
 * Simple stemmer.
 *
 * @param {string} input
 * @return {*}  {string}
 */
function stemmer(input: string): string {
  const c = '[^aeiou]'; // consonant
  const v = '[aeiouy]'; // vowel
  const C = c + '[^aeiouy]*'; // consonant sequence
  const V = v + '[aeiou]*'; // vowel sequence
  const mgr0 = '^(' + C + ')?' + V + C; // [C]VC... is m>0
  const s_v = '^(' + C + ')?' + v; // vowel in stem
  let re = /^(.+?)eed$/;
  let re2 = /^(.+?)(ed|ing)$/;
  let w = input;
  if (re.test(w)) {
    const fp = re.exec(w);
    if (fp) {
      re = new RegExp(mgr0);
      if (re.test(fp[1])) {
        re = /.$/;
        w = w.replace(re, '');
      }
    }
  } else if (re2.test(w)) {
    const fp = re2.exec(w);
    if (fp) {
      const stem = fp[1];
      re2 = new RegExp(s_v);
      if (re2.test(stem)) {
        w = stem;
        re2 = /(at|bl|iz)$/;
        const re3 = new RegExp('([^aeiouylsz])\\1$');
        const re4 = new RegExp('^' + C + v + '[^aeiouwxy]$');
        if (re2.test(w)) {
          w = w + 'e';
        } else if (re3.test(w)) {
          re = /.$/;
          w = w.replace(re, '');
        } else if (re4.test(w)) {
          w = w + 'e';
        }
      }
    }
  }
  return w;
}

const singularRegex: [RegExp, string][] = [
  [/(quiz)zes$/i, "$1"],
  [/(matr)ices$/i, "$1ix"],
  [/(vert|ind)ices$/i, "$1ex"],
  [/^(ox)en$/i, "$1"],
  [/(alias)es$/i, "$1"],
  [/(octop|vir)i$/i, "$1us"],
  [/(cris|ax|test)es$/i, "$1is"],
  [/(shoe)s$/i, "$1"],
  [/(o)es$/i, "$1"],
  [/(bus)es$/i, "$1"],
  [/([m|l])ice$/i, "$1ouse"],
  [/(x|ch|ss|sh)es$/i, "$1"],
  [/(m)ovies$/i, "$1ovie"],
  [/(s)eries$/i, "$1eries"],
  [/([^aeiouy]|qu)ies$/i, "$1y"],
  [/([lr])ves$/i, "$1f"],
  [/(tive)s$/i, "$1"],
  [/(hive)s$/i, "$1"],
  [/(li|wi|kni)ves$/i, "$1fe"],
  [/(shea|loa|lea|thie)ves$/i, "$1f"],
  [/(^analy)ses$/i, "$1sis"],
  [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis"],
  [/([ti])a$/i, "$1um"],
  [/(n)ews$/i, "$1ews"],
  [/(h|bl)ouses$/i, "$1ouse"],
  [/(corpse)s$/i, "$1"],
  [/(us)es$/i, "$1"],
  [/s$/i, ""],
];

const irregular: [string, string][] = [
  ["person", "people"],
  ["man", "men"],
  ["human", "humans"],
  ["child", "children"],
  ["sex", "sexes"],
  ["glove", "gloves"],
  ["move", "moves"],
  ["goose", "geese"],
  ["wave", "waves"],
  ["foot", "feet"],
  ["tooth", "teeth"],
  ["curriculum", "curricula"],
  ["database", "databases"],
  ["zombie", "zombies"],
  ["personnel", "personnel"],
  ["cache", "caches"],
];

const irregularSingular = new Map<string, string>(
  irregular.map((x) => [x[1], x[0]])
);

const uncountable = new Set<string>([
  "s",
  "ss",
  "ms",
  "m",
  "os",
  "sheep",
  "fish",
  "deer",
  "moose",
  "series",
  "species",
  "money",
  "rice",
  "information",
  "equipment",
]);

/**
 * Convert word to singular.
 *
 * @param {string} text
 * @return {*}  {string}
 */
function singular(text: string): string {
  if (uncountable.has(text)) return text;

  const val = irregularSingular.get(text);
  if (val) return val;

  for (const [pattern, replace] of singularRegex) {
    if (pattern.test(text)) return text.replace(pattern, replace);
  }

  return text;
}

/**
 * Normalize a word.
 *
 * @export
 * @param {string} input
 * @return {*}  {string}
 */
export function normalize(input: string): string {
  let text = singular(input);
  text = stemmer(text);
  return text;
}
