<template>
  <div class="recent-blogs-container light-blue-bg">

    <blog-loading v-if="isLoading"></blog-loading>

    <div v-if="!isLoading" class="max-container blog-items-container">
      <blog-item v-for="blogItem in blogItems" :key="blogItem.blogInfo.timeStamp" class="blog-item-comp" :blogItem="blogItem"></blog-item>
    </div>

  </div>
</template>

<script>
import BlogItem from "@/components/common/BlogItem/BlogItem";
import BlogLoading from "@/components/common/Loading/Loading";

export default {
  data() {
    return {
      isLoading: true,
      blogItems: []
    };
  },

  components: {
    BlogItem: BlogItem,
    BlogLoading: BlogLoading
  },

  mounted() {
    // send request to get blog item data
    this.$axios({
      method: 'get',
      url: '/blogs?typeName=recent'
    })
    .then((response) => {
      // set Loading as false
      this.isLoading = false;

      let data = response.data;

      if (data.type === 'success') {
        this.blogItems = data.data.recentBlogItems;
      }
      else {
        console.error('Error')
      }
    })
  }
};
</script>

<style scoped>
/* recent blogs container style */
.recent-blogs-container {
  padding: 20px 0;
}

/* blog item component */
.blog-item-comp {
  margin: 20px 0;
}
</style>
