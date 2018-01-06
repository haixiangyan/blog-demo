<template>
  <div class="blogs-page">
    <!-- navigation -->
    <blog-nav></blog-nav>

    <!-- blog base -->
    <blog-base></blog-base>

    <!-- type navigation -->
    <blog-type-nav class="blog-type-nav-comp light-blue-bg" @chooseType="chooseType" @search="displayResult" :navInfo="navInfo"></blog-type-nav>

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
import BlogItem from "@/components/common/BlogItem/BlogItem";
import BlogFooter from "@/components/common/Footer/Footer";

export default {
  data() {
    return {
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
      ],
      blogs: []
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
      this.blogs = data.blogItems;
    },

    displayResult(keyword, data) {
      this.blogs = data.blogItems;
    }
  },

  mounted() {
    // Get the type of blogs
    let typeName = this.$route.query.typeName;
    let keyword = this.$route.query.keyword;

    if (keyword) {
      // Get the blogs information by searching keyword
      this.$axios({
        method: "get",
        url: `/search?q=${keyword}`
      }).then(response => {
        let data = response.data;

        if (data.type === "success") {
          this.blogs = data.data.blogItems;
        } else {
          console.error("error");
        }
      });
    } else if (typeName) {
      // Get the blogs information by given typeName
      this.$axios({
        method: "get",
        url: `/blogs?typeName=${typeName}`
      }).then(response => {
        let data = response.data;

        if (data.type === "success") {
          this.blogs = data.data.blogItems;
        } else {
          console.error("error");
        }
      });
    } else {
      // Get the blogs information by given typeName
      this.$axios({
        method: "get",
        url: `/blogs?typeName=allPost`
      }).then(response => {
        let data = response.data;

        if (data.type === "success") {
          this.blogs = data.data.blogItems;
        } else {
          console.error("error");
        }
      });
    }
  }
};
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
