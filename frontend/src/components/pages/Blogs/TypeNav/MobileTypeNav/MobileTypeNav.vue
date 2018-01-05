<template>
  <div>
    <div class="mobile-type-nav-container">
      <blog-nav-item @chooseType="chooseType" v-for="navItemInfo in navInfo" :navItemInfo="navItemInfo" :key="navItemInfo.title"></blog-nav-item>
    </div>
  </div>
</template>

<script>
import BlogNavItem from '@/components/pages/Blogs/TypeNav/MobileTypeNav/NavItem/NavItem';

export default {
  props: {
    navInfo: {
      type: Array,
      default: []
    }
  },

  components: {
    BlogNavItem
  },

  methods: {
    chooseType(data) {
      this.$emit('chooseType', data);
    }
  }
}
</script>

<style scoped>
.mobile-type-nav-container {
  display: flex;
  flex-direction: column;
}
</style>
