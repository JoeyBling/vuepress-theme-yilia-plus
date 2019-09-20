import Vue from 'vue'
import ForkMe from "@theme/components/ForkMe.vue";
import Footer from "@theme/components/Footer.vue";
import * as config from "./package.json"

//代码高亮文件引入
/* import hljs from 'highlight.js' */

//样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
/* import 'highlight.js/styles/color-brewer.css' */

/** v-highlight */
Vue.directive('highlight', function (el) {
  /* let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  }) */
})

// 阻止启动生产环境消息
Vue.config.productionTip = false
// 注册Vue全局组件
Vue.component('ForkMe', ForkMe)
// 暂时不能把Footer声明在这里，不然会导致比Document先执行(我放在mounted()函数里执行完美解决)
Vue.component('Footer', Footer)

// 自定义扩展参数
Vue.prototype.$appName = config.name;
Vue.prototype.$appUrl = config.homepage;
Vue.prototype.$appDescription = config.description;

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  // options, // 附加到根实例的一些选项
  // router, // 当前应用的路由实例
  // siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
}
