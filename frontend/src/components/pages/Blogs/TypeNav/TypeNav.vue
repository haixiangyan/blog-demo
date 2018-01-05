<template>
  <div>
    <!-- pc blogs type navigation -->
    <blog-pc-type-nav @chooseType="chooseType" :navInfo="navInfo" class="is-pc"></blog-pc-type-nav>

    <!-- mobile blogs type navigation -->
    <blog-mobile-type-nav @chooseType="chooseType" :navInfo="navInfo" class="is-mobile"></blog-mobile-type-nav>
  </div>
</template>

<script>
import BlogPcTypeNav from "@/components/pages/Blogs/TypeNav/PCTypeNav/PCTypeNav";
import BlogMobileTypeNav from "@/components/pages/Blogs/TypeNav/MobileTypeNav/MobileTypeNav";

export default {
  props: {
    navInfo: {
      type: Array,
      default: []
    }
  },

  components: {
    BlogPcTypeNav,
    BlogMobileTypeNav
  },

  methods: {
    chooseType(data) {
      this.$emit('chooseType', data);
    }
  }
}
</script>

<style scoped>

</style>
