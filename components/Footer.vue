<template>
  <div class="footer" :style="frontmatter.home ? 'margin-left:0px;' : ''">
    <div id="footer-info">
      <div class="footer-left">
        &copy; {{ data.since && data.since < nowYear ? data.since + '-' : '' }}{{nowYear}}
        <span v-if="data.author" v-html="data.author"></span>
      </div>
      <div class="footer-right" v-if="defaultLitten" v-html="defaultLitten"></div>
    </div>
    <Busuanzi v-if="data.busuanzi && data.busuanzi.enable" />
  </div>
</template>

<script>
import Busuanzi from "@theme/components/Busuanzi.vue";

export default {
  components: {
    Busuanzi
  },
  data() {
    return {
      defaultLitten: `Theme:<a href="https://github.com/JoeyBling/vuepress-theme-yilia-plus" target="_blank">vuepress-theme-yilia-plus</a> by Litten`,
      nowYear: new Date().getFullYear()
    };
  },
  computed: {
    data() {
      return this.$themeConfig.yilia_plus.footer;
    },
    frontmatter() {
      return this.$page.frontmatter;
    }
  }
};
</script>

/* scoped可以使组件的样式不相互污染,实现了样式的模块化 */
<style lang="stylus" scoped>
.footer {
  padding: 1.5rem 1.5rem;
  border-top: 1px solid $borderColor;
  text-align: center;
  color: lighten($textColor, 25%);
  font-size: 15px;
  font-family: Menlo, Monaco, 'Andale Mono', 'lucida console', 'Courier New', monospace;
  text-shadow: 0 1px #fff;
  bottom: 30px;
  opacity: 0.7;
  width: auto;
  /* config.styl 继承的配置 */
  margin-left: $sidebarWidth;
  text-align: center;

  .footer-left {
    float: left;
  }

  .footer-right {
    float: right;
  }
}

@media screen and (max-width: $MQMobile) {
  .footer {
    margin-left: 0px;

    .footer-left {
      float: none;
      margin-bottom: 10px;
    }

    .footer-right {
      float: none;
      margin-bottom: 10px;
    }
  }
}
</style>
