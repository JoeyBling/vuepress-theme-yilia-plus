// .vuepress/config.js
module.exports = {
  theme: 'vuepress-theme-yilia-plus',
  /* 使用插件 */
  plugins: [],
  themeConfig: {
    /* vuepress-theme-yilia-plus 配置 */
    yilia_plus: {
      // github-corner(关闭请设置为false)
      github: {
        url: "https://github.com/JoeyBling/vuepress-theme-yilia-plus"
      },
      footer: {
        // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
        since: 2018,
        // 网站作者(关闭请设置为false)
        author: '<a href="https://github.com/JoeyBling/vuepress-theme-yilia-plus" target="_blank">試毅-思伟</a>',
        // 访问量统计功能(不蒜子)
        busuanzi: {
          // 是否启用(关闭请设置为false)
          enable: true
        }
      }
    },
    nav: [{
      text: 'Home',
      link: '/'
    }],
  },
}
