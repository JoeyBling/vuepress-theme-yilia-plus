<template>
  <main>
    <ParentLayout />
    <ForkMe slot="sidebar-top" />
  </main>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import ForkMe from "@theme/components/ForkMe.vue";

export default {
  components: {
    ParentLayout,
    ForkMe
  }
};
</script>