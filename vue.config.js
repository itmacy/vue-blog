module.exports = {
  devServer: {
    port: 8092
  },
  /**
   * 如果打算将项目部署到 https://<USERNAME>.github.io/ 上, publicPath 将默认被设为 "/"，你可以忽略这个参数。
   * 如果打算将项目部署到 https://<USERNAME>.github.io/<REPO>/ 上 (即仓库地址为 https://github.com/<USERNAME>/<REPO>)，可将 publicPath 设为 "/<REPO>/"
   */
  publicPath: process.env.NODE_ENV === 'production'
    ? '/blog-preview' // 当为生产环境时，与仓库名一致
    : '/'
}
