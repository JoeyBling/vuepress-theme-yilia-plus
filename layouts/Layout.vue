<template>
  <main>
    <ForkMe v-if="yilia_plus" slot="sidebar-top" />
    <ParentLayout />
    <Footer v-if="yilia_plus" />
    <!-- <Live2d v-if="yilia_plus" /> -->
  </main>
</template>

<script>
const defaultConfig = require("../default_config");

import ParentLayout from "@parent-theme/layouts/Layout.vue";

export default {
  components: {
    ParentLayout
  },
  computed: {
    yilia_plus() {
      return this.$themeConfig.yilia_plus;
    }
  },
  mounted() {
    if (defaultConfig.log_app) {
      console.info &&
        console.log(
          this.$appDescription + " ➡️ " + this.$appName + " ➡️ " + this.$appUrl
        );
    }
  }
};
</script>

/* 自定义样式 */
<style src="../styles/theme.styl" lang="stylus"></style>