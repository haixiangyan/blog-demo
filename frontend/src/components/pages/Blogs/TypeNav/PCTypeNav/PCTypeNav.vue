<template>
  <div>
    <div class="pc-type-nav-container max-container">
      <div class="pc-type-nav">
        <blog-nav-item @chooseType="chooseType" class="blog-nav-item-comp" v-for="navItemInfo in navInfo" :key="navItemInfo.title" :navItemInfo="navItemInfo"></blog-nav-item>
      </div>

      <div class="search">
        <blog-search-input @search="emitSearchResult"></blog-search-input>
      </div>
    </div>
  </div>
</template>

<script>
import BlogNavItem from '@/components/pages/Blogs/TypeNav/PCTypeNav/NavItem/NavItem';
import BlogSearchInput from '@/components/pages/Blogs/TypeNav/SearchInput/SearchInput';

export default {
  props: {
    navInfo: {
      type: Array,
      default: []
    }
  },

  data() {
    return {
      
    };
  },

  components: {
    BlogNavItem,
    BlogSearchInput
  },

  methods: {
    chooseType(data) {
      this.$emit('chooseType', data);
    },

    emitSearchResult(keyword, data) {
      this.$emit('search', keyword, data);
    }
  }
};
</script>

<style scoped>
.pc-type-nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pc-type-nav {
  display: flex;
}

.blog-nav-item-comp {
  margin: 0 20px;
}
</style>
