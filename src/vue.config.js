const path = require('path');
function resolve(dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js", //加上这一句
        '@': resolve('src'),
        '@font': resolve("src/assets/font")
      }
    },
  }
}
