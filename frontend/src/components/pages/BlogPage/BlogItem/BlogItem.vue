<template>
  <div class="blog-item-container">
    <!-- header -->
    <blog-item-header class="blog-item-header-comp" :blogItem="blogItem"></blog-item-header>

    <!-- content -->
    <blog-item-content class="blog-item-content-comp" :blogItem="blogItem" :isFilter="false" :isLink="false"></blog-item-content>

    <!-- footer -->
    <blog-item-footer :isShowComment="false" class="blog-item-footer-comp" :blogItem="blogItem"></blog-item-footer>
  </div>
</template>

<script>
import BlogItemHeader from "@/components/common/BlogItem/Header/Header";
import BlogItemContent from "@/components/common/BlogItem/Content/Content";
import BlogItemFooter from "@/components/common/BlogItem/Footer/Footer";

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

  data () {
    return {

    };
  },

  components: {
    BlogItemHeader,
    BlogItemContent,
    BlogItemFooter,
  },
}
</script>

<style scoped>
.blog-item-header-comp {
  margin-bottom: 30px;
}

.blog-item-footer-comp {
  padding: 30px 0;
}
</style>