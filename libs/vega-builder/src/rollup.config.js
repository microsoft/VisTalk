// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

const { terser } = require('rollup-plugin-terser');
const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');

module.exports = (config) => {
    const nxConfig = nrwlConfig(config)
    if (nxConfig.output.format === 'umd') {
        nxConfig.output.entryFileNames = 'main.js';
        nxConfig.output.globals = {
            '@vis-talk/interpreter': 'interpreter',
            'lodash': 'lodash'
        };
    }
    return {
        ...nxConfig,
        plugins: [
            ...nxConfig.plugins,
            terser({ output: { comments: false } }),
        ],
    }
}