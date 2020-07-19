
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    devServer: {
      proxy: {
        // 名字可以自定义，用于指定哪些请求需要被 target 对应的主机代理
        // 当前 devServer 的地址是 localhost:8080 , 需要代理的地址是 localhost:3000
        '/api': {
          target: 'https://localhost:44313', // 设置你调用的接口域名和端口号 别忘了加http
          changeOrigin: true, // 这里设置是否跨域
          pathRewrite: { // 路径重写
            '^/api': ''
          }
        }
      }
    }
  }
}
