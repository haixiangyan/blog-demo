<template>
  <div>
      <router-link target = "_blank" v-if="isLink" :to="`/blog/${blogItem.authorInfo.author}/${blogItem.blogInfo.timeStamp}`" class="blog-link-content-container">
        <div class="blog-title title-font-size main-font-color">
          {{blogItem.blogInfo.blogTitle}}
        </div>

        <p class="blog-content normal-font-color">
          {{filterBlogContent}}
        </p>

        <div class="delimiter"></div>
      </router-link>

      <div v-if="!isLink" class="blog-content-container">
        <div class="blog-title title-font-size main-font-color">
          {{blogItem.blogInfo.blogTitle}}
        </div>

        <p class="blog-content normal-font-color">
          {{filterBlogContent}}
        </p>

        <div class="delimiter"></div>
      </div>
  </div>
</template>

<script>
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
    isFilter: {
      type: Boolean,
      default: true
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    filterBlogContent() {
      if (!this.isFilter) {
        return this.blogItem.blogInfo.blogContent;
      }

      let strArr = this.blogItem.blogInfo.blogContent.split(' ');

      // If number of words is less than 20, then return the content
      if (strArr.length < this.maxContentLength) {
        return this.blogItem.blogInfo.blogContent;
      }
      else {
        let newBlogContent = '';
        
        // Append first 20 words
        for (let i = 0 ; i < this.maxContentLength ; i++) {
          newBlogContent = newBlogContent + strArr[i];
        }
        
        return newBlogContent;
      }
    }
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
