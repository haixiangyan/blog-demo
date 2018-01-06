<template>
  <div class="blog-page-container">
    <!-- navigation -->
    <blog-nav></blog-nav>

    <!-- blog base -->
    <blog-base></blog-base>

    <!-- type navigation -->
    <blog-type-nav class="blog-type-nav-comp light-blue-bg" @chooseType="chooseType" :navInfo="navInfo"></blog-type-nav>

    <!-- blog item -->
    <div class="blog-item-container white-bg">
      <div class="max-container">
        <blog-item :isLink="false" class="white-bg" v-show="blogItem" :blogItem="blogItem"></blog-item>
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
import BlogItem from "@/components/pages/BlogPage/BlogItem/BlogItem";
import BlogFooter from "@/components/common/Footer/Footer";

export default {
  data() {
    return {
      blogItem: {
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
          viewNum: -1,
          isLike: false
        }
      },
      navInfo: [
        {
          title: "Coding",
          subNav: [
            {
              title: "Front end blogs",
              link: "/"
            },
            {
              title: "Back end blogs",
              link: "/"
            }
          ]
        },
        {
          title: "Life",
          subNav: [
            {
              title: "Life in China",
              link: "/"
            },
            {
              title: "Life in UCI",
              link: "/"
            }
          ]
        }
      ]
    };
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
    let authorName = this.$route.params.authorName;
    let blogID = this.$route.params.blogID;

    this.$axios({
      method: 'get',
      url: `/blog?author=${authorName}&blogID=${blogID}`
    })
    .then((response) => {
      let data = response.data;

      if (data.type === 'success') {
        this.blogItem = data.data.blogItem;
      }
      else {
        console.error('error');
      }
    })
  }
};
</script>

<style scoped>
.blog-item-container {
  padding: 50px 0 20px;
}
</style>
