<template>
  <div class="busuanzi">
    <span id="busuanzi_container_site_pv" style="display:none">
      本站总访问量
      <span id="busuanzi_value_site_pv"></span>次
      <span class="post-meta-divider">|</span>
    </span>
    <span id="busuanzi_container_site_uv" style="display:none">
      本站访客数
      <span id="busuanzi_value_site_uv"></span>人
    </span>
  </div>
</template>

<script>
/* 不蒜子访问量统计 */
let script;

/* https://blog.csdn.net/u010881899/article/details/80895661 */
/* 不蒜子访问量统计 */
// const ID = "busuanzi-script";

export default {
  methods: {
    init() {
      // let busuanzi_script = document.getElementById(ID);
      // if (busuanzi_script) {
      //   // 手动触发一次，防止Vue重新渲染后不触发操作
      //   bszCaller.fetch(
      //     "//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",
      //     function(a) {
      //       bszTag.texts(a), bszTag.shows();
      //     }
      //   );
      //   //busuanzi_script.remove();
      // }
      // if (!busuanzi_script) {
      //   /* 组件引入第三方外部Js */
      //   const s = document.createElement("script");
      //   s.type = "text/javascript";
      //   s.id = ID;
      //   /* CDN 加速服务: //cdn.busuanzi.ibruce.info/cdn/busuanzi/2.3/busuanzi.pure.mini.js */
      //   /* 默认域名：//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js */
      //   s.src = `//cdn.busuanzi.ibruce.info/cdn/busuanzi/2.3/busuanzi.pure.mini.js`;
      //   document.head.appendChild(s);
      // }
    }
  },
  mounted() {
    script = require("busuanzi.pure.js");
    // this.init();
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        script.fetch();
      }
      // console.log(to.path);
    }
  }
};
</script>