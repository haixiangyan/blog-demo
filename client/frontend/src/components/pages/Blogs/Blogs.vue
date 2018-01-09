<template>
  <div class="blogs-page">
    <!-- type navigation -->
    <blog-type-nav class="blog-type-nav-comp light-blue-bg" @chooseType="chooseType" @search="displayResult" @beginSearch="beginSearch" :navInfo="navInfo"></blog-type-nav>

    <!-- blogs -->
    <div class="blogs-container light-blue-bg">
      <!-- loading  -->
      <blog-loading v-if="isLoading"></blog-loading>

      <!-- empty component -->
      <blog-empty v-if="isEmpty"></blog-empty>

      <div v-if="!isLoading && !isEmpty" class="max-container">
        <blog-item class="blog-item-comp" v-for="blogItem in blogs" :blogItem="blogItem" :key="blogItem.blogInfo.timeStamp"></blog-item>
      </div>
    </div>
  </div>
</template>

<script>
import BlogTypeNav from "@/components/pages/Blogs/TypeNav/TypeNav";
import BlogItem from "@/components/common/BlogItem/BlogItem";
import BlogEmpty from "@/components/common/Empty/Empty";
import BlogLoading from "@/components/common/Loading/Loading";

export default {
  data() {
    return {
      isLoading: false,
      navInfo: [
        {
          title: "Coding",
          subNav: [
            {
              topic: "Front end blogs"
            },
            {
              topic: "Back end blogs"
            }
          ]
        },
        {
          title: "Life",
          subNav: [
            {
              topic: "Life in China"
            },
            {
              topic: "Life in UCI"
            }
          ]
        }
      ],
      blogs: []
    };
  },

  computed: {
    isEmpty() {
      return this.blogs.length === 0;
    }
  },

  components: {
    BlogTypeNav,
    BlogItem,
    BlogLoading,
    BlogEmpty
  },

  methods: {
    chooseType(data) {
      this.blogs = data.blogItems;
    },

    displayResult(keyword, data) {
      this.blogs = data.blogItems;
      this.isLoading = false;
    },

    beginSearch() {
      this.isLoading = true;
    }
  },

  mounted() {
    // Get the blogs information by given typeName
    this.$axios({
      method: "get",
      url: `/blogs`
    }).then(response => {
      let data = response.data;

      if (data.type === "success") {
        this.blogs = data.data.blogItems;
      } else {
        console.error("error");
      }
    });
    this.isLoading = false;
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
