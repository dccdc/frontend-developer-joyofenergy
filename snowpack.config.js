// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* key-value形式，key表示要挂载的文件夹，value中的url表示访问的路径
    * 如下面的public文件夹，访问任意未配置的任意路径时都会跳到public目录中
    * src： 这时能通过 http://localhost:8080/dist/App.js 访问
    * 
    * ！！！ 配置后的目录才会打包且能访问到
    */
    src: { url: '/dist' },
    public: { url: '/', static: true }
  },
  plugins: [
    // '@snowpack/plugin-react-refresh',
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
