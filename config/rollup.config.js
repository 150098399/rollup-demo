var common = require('./rollup.js')
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.cjs.js',
    format: 'cjs',
    banner: common.banner
  },
  plugins: [
    common.getCompiler()
  ]
}