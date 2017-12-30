<template>
  <div class="recent-blogs-container light-blue-bg">
    <div class="max-container blog-items-container white-bg">
      <blog-item class="blog-item-comp" :blogItem="blogItem" :isRow="false"></blog-item>
    </div>
  </div>
</template>

<script>
import BlogItem from "@/components/common/BlogItem/BlogItem";
export default {
  data() {
    return {
      blogItem: {
        imgSrc: "/static/img/blogs/blog_1.jpg",
        authorInfo: {
          avatar: "/static/img/utils/avatar.jpg",
          author: "Haixiang Yan",
        },
        blogInfo: {
          publishDate: "Nov 23",
          publishTime: "21:30",
          blogTitle: "What I Wore: Travel Edition",
          blogContent:
            "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
          timeStamp: 1514570264733
        },
        reviewInfo: {
          viewNum: 232
        }
      }
    };
  },
  components: {
    BlogItem: BlogItem
  }
};
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  .blog-items-container {
    padding: 0 35px;
    box-sizing: border-box;
  }
}

@media screen and (min-width: 1024px) {
  .blog-items-container {
    padding: 35px;
    box-sizing: border-box;
  }
}

.recent-blogs-container {
  padding: 40px 0;
}
</style>
