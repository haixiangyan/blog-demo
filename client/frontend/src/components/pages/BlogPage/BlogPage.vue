<template>
  <div class="blog-page-container">
    <!-- blog item -->
    <div class="blog-item-container white-bg">

      <!-- loading -->
      <blog-loading v-if="isLoading"></blog-loading>

      <!-- blog empty component -->
      <blog-empty v-if="isEmpty"></blog-empty>

      <div v-if="!isEmpty && !isLoading" class="max-container">
        <blog-item :isLink="false" class="white-bg" v-show="blogItem" :blogItem="blogItem"></blog-item>
      </div>
    </div>
  </div>
</template>

<script>
import BlogItem from "@/components/pages/BlogPage/BlogItem/BlogItem";
import BlogEmpty from "@/components/common/Empty/Empty";
import BlogLoading from "@/components/common/Loading/Loading";

export default {
  data() {
    return {
      isLoading: false,
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
          viewNum: 232,
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

  computed: {
    isEmpty() {
      return Object.keys(this.blogItem) === 0;
    }
  },

  components: {
    BlogItem,
    BlogLoading,
    BlogEmpty
  },

  methods: {
    chooseType(data) {
      this.blogs = data;
    },

    displayResult(keyword, data) {
      this.$route.push({
        path: '/blogs',
        query: {
          keyword: keyword
        }
      });
    }
  },

  mounted() {
    let authorName = this.$route.params.authorName;
    let blogID = this.$route.params.blogID;

    this.isLoading = true;

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

    this.isLoading = false;
  }
};
</script>

<style scoped>
.blog-item-container {
  padding: 50px 0 20px;
}
</style>
