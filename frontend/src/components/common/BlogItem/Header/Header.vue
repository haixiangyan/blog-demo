<template>
  <div class="blog-header-container">
    <!-- avatar -->
    <div class="avatar-container">
      <img :src="blogItem.authorInfo.avatar" alt="" class="avatar">
    </div>

    <!-- author information -->
    <div class="author-info-container">
      <p class="author-name">{{blogItem.authorInfo.author}}</p>

      <div class="publish-date-time">
        {{blogItem.blogInfo.publishDate}} - {{blogItem.blogInfo.publishTime}}
      </div>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>
.blog-header-container {
  display: flex;
  align-items: center;
}

/* avatar style */
.avatar-container {
  padding-right: 10px;
}

.avatar-container img {
  max-width: 35px;
  border-radius: 50%;
  border: 1px solid #909399;
}

/* author info */
.author-info-container {
  height: 33px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.author-name,
.publish-date-time {
  color: rgb(47,46,46);
  font-size: .9em;
  font-family: helvetica-w01-light;
}
</style>
