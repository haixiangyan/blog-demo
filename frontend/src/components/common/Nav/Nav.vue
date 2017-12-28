<template>
  <div class="nav-container">
    <blog-pc-Nav class="is-pc"></blog-pc-Nav>
    <blog-mobile-Nav class="is-mobile"></blog-mobile-Nav>
  </div>
</template>

<script>
import BlogPcNav from '@/components/common/Nav/PCNav/PCNav';
import BlogMobileNav from '@/components/common/Nav/MobileNav/MobileNav';

export default {
  data() {
    return {

    }
  },
  components: {
    'BlogPcNav': BlogPcNav,
    'BlogMobileNav': BlogMobileNav,
  }
};
</script>

<style scoped>
.nav-container {
  text-align: center;
}
</style>
