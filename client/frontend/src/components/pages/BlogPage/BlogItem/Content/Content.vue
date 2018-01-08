<template>
  <div class="blog-content-container">
    <div class="blog-title title-font-size main-font-color">
      {{blogItem.blogInfo.blogTitle}}
    </div>

    <vue-markdown class="blog-content normal-font-color" :source="blogItem.blogInfo.blogContent">
    </vue-markdown>

    <!--  -->
    <!-- {{blogItem.blogInfo.blogContent}} -->

    <div class="delimiter"></div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  data() {
    return {
      maxContentLength: 20
    };
  },

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
    },
  },

  components: {
    VueMarkdown,
  }
}
</script>

<style scoped>
/* blog title style */
.blog-title {
  font-family: "libre baskerville";
  transition: .35s color;
}

.blog-link-content-container:hover .blog-title {
  color: rgba(129,145,156,1);
}

/* blog content style */
.blog-content {
  margin: 30px 0px;
  line-height: 1.5;
  word-wrap: break-word;
}
</style>
