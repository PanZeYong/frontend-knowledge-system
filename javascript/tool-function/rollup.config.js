const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const resolve = require('@rollup/plugin-node-resolve')
const size = require('rollup-plugin-filesize')
const cleanup = require('rollup-plugin-cleanup')
const { terser } = require('rollup-plugin-terser')

module.exports = {
    input: 'src/index.js',
    output: {
        format: 'umd',
        file: 'lib/tool-function.min.js',
        name: 'js',
        // inlineDynamicImports: true // 支持动态导入文件（https://rollupjs.org/guide/en/#outputinlinedynamicimports）
    },
    plugins: [
        resolve({
            browser: true,
            preferBuiltins: true
        }),
        commonjs({
            browser: true
        }),
        babel({
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: '> 0.25%, not dead'
                    }
                ]
            ]
        }),
        terser(),
        size(),
        cleanup()
    ]
}
