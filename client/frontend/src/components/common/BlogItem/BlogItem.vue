<template>
  <div class="blog-item-container white-bg">
    <div :class="['blog-image-container', 'flex-column', 'flexible-column']">
      <blog-item-image :imgSrc="blogItem.imgSrc"></blog-item-image>
    </div>

    <div :class="['blog-text-container', 'flex-column', 'flexible-column']">
      <blog-item-header class="blog-item-header-comp" :blogItem="blogItem"></blog-item-header>
      <blog-item-content class="blog-item-content-comp" :blogItem="blogItem"></blog-item-content>
      <blog-item-footer class="blog-item-footer-comp" :blogItem="blogItem"></blog-item-footer>
    </div>
  </div>
</template>

<script>
import BlogItemHeader from "@/components/common/BlogItem/Header/Header";
import BlogItemContent from "@/components/common/BlogItem/Content/Content";
import BlogItemFooter from "@/components/common/BlogItem/Footer/Footer";
import BlogItemImage from "@/components/common/BlogItem/Image/Image";

export default {
  props: {
    blogItem: {
      type: Object,
      default: {
        imgSrc: '/static/img/utils/no-img.jpg',
        authorInfo: {
          avatar: '/static/img/utils/no-author.png',
          author: '',
        },
        blogInfo: {
          publishDate: '',
          publishTime: '',
          blogTitle: '',
          blogContent: '',
          timeStamp: -1
        },
        reviewInfo: {
          viewNum: 232,
          isLike: false
        }
      }
    }
  },
  data() {
    return {
    };
  },
  components: {
    BlogItemHeader,
    BlogItemContent,
    BlogItemFooter,
    BlogItemImage,
  }
}
</script>

<style scoped>
@media screen and (min-width: 640px) {
  .blog-text-container,
  .blog-image-container {
    padding: 20px 0;
  }
}

@media screen and (max-width: 640px) {
  .blog-image-container {
    padding: 0;
  }

  .blog-text-container {
    width: 90%;
    margin: 20px 0;
  }
}

/* blog item container */
.blog-item-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

/* layout container */
.flex-column {
  display: flex;
  flex-direction: column;
}

/* blog item content components style */
.blog-item-content-comp {
  margin: 15px 0;
}
</style>

