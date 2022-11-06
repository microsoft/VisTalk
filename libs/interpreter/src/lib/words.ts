// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { modelConfig } from './model-data';

const words = new Set<string>(Object.keys(modelConfig.words));

/**
 * Check if a word is a known word in vocab.
 *
 * @export
 * @param {string} word
 * @return true if it's known word.
 */
export function hasWord(word: string) {
    return words.has(word);;
}
