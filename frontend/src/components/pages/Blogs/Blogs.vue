<template>
  <div class="blogs-page">
    <!-- navigation -->
    <blog-nav></blog-nav>

    <!-- blog base -->
    <blog-base></blog-base>

    <!-- type navigation -->
    <blog-type-nav class="blog-type-nav-comp light-blue-bg" @chooseType="chooseType" :navInfo="navInfo"></blog-type-nav>

    <!-- blogs -->
    <div class="blogs-container light-blue-bg">
      <div class="max-container">
        <blog-item class="blog-item-comp" v-for="blogItem in blogs" :blogItem="blogItem" :key="blogItem.blogInfo.timeStamp"></blog-item>
      </div>
    </div>

    <!-- blog footer -->
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import BlogNav from "@/components/common/Nav/Nav";
import BlogBase from "@/components/common/Base/Base";
import BlogTypeNav from "@/components/pages/Blogs/TypeNav/TypeNav";
import BlogItem from '@/components/common/BlogItem/BlogItem';
import BlogFooter from "@/components/common/Footer/Footer";

export default {
  data() {
    return {
      navInfo: [],
      blogs: []
    }
  },

  components: {
    BlogNav,
    BlogBase,
    BlogTypeNav,
    BlogItem,
    BlogFooter
  },

  methods: {
    chooseType(data) {
      this.blogs = data;
    }
  },

  mounted() {
    // Get the category
    this.$axios({
      method: 'get',
      url: '/blogCategory'
    })
    .then((response) => {
      let data = response.data;

      if (data.type === 'success') {
        this.navInfo = data.data.navInfo;
      }
      else {
        console.error('error');
      }

      // Get the blogs information
      this.$axios({
        method: 'get',
        url: '/allPostBlogs'
      })
      .then((response) => {
        let data = response.data;

        if (data.type === 'success') {
          this.blogs = data.data.recentBlogItems;
        }
        else {
          console.error('error');
        }
      })
    })
  }
}
</script>

<style scoped>
.blogs-container {
  padding: 10px 0;
}

.blog-type-nav-comp {
  padding: 10px 0;
}

.blog-item-comp {
  margin: 20px 0;
}
</style>
