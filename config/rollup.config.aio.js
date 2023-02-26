var common = require('./rollup.js')
var commonjs = require('rollup-plugin-commonjs');
var nodeResolve = require('rollup-plugin-node-resolve')
// 为了将依赖的第三方库也打包进来，引入 rollup-plugin-node-resolve 插件
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.aio.js',
    format: 'umd',
    name: 'clone',
    banner: common.banner
  },
  plugins: [
    nodeResolve({
      main: true,
      extensions: ['.js']
    }),
    commonjs({
      include: 'node_modules/**',
  }),
    common.getCompiler()
  ]
}