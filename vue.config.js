module.exports = {
  devServer: {
    // 项目运行时候的端口号
    port: 80
  },
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
};