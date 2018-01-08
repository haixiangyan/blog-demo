<template>
  <div class="blog-footer-container">
    <div class="review-container">
      <div class="review offset-font-size normal-font-color">
        {{blogItem.reviewInfo.viewNum}} views
      </div>

      <router-link v-if="isShowComment" :to="`/blog/${blogItem.authorInfo.author}/${blogItem.blogInfo.timeStamp}`" class="comment offset-font-size normal-font-color">
        Write a Comment
      </router-link>
    </div>
    
    <div class="function">
      <div @click="like" class="like">
        <i v-if="!currentIsLike" class="fa fa-heart-o" aria-hidden="true"></i>
        <i v-if="currentIsLike" class="fa fa-heart" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIsLike: this.blogItem.reviewInfo.isLike
    };
  },
  props: {
    blogItem: {
      type: Object,
      default: {
        imgSrc: "/static/img/utils/no-img.jpg",
        authorInfo: {
          avatar: "/static/img/utils/no-author.png",
          author: ""
        },
        blogInfo: {
          publishDate: "",
          publishTime: "",
          blogTitle: "",
          blogContent: "",
          timeStamp: -1
        },
        reviewInfo: {
          viewNum: 232,
          isLike: false
        }
      }
    },
    isShowComment: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    like() {
      this.currentIsLike = !this.currentIsLike;
    }
  }
};
</script>

<style scoped>
/* blog footer container */
.blog-footer-container {
  display: flex;
  justify-content: space-between;
}

/* review container style */
.review-container {
  display: flex;
}

/* review number style */

/* comment style */
.comment {
  margin: 0 10px;
}

/* like style */
.like i {
  color: #e84a43;
  cursor: pointer;
}
</style>
