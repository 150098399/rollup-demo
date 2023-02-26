var common = require('./rollup.js')
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.ejs.js',
    format: 'es',
    banner: common.banner
  },
  plugins: [
    common.getCompiler()
  ]
}