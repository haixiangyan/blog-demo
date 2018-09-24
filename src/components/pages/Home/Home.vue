<template>
    <div>
        <!-- Motto -->
        <h3 class="motto motto-font">If we dream, everything is possible.</h3>

        <!-- Introduction of Blog -->
        <blog-intro></blog-intro>

        <!-- Recent blogs part -->
        <blog-recent-blogs></blog-recent-blogs>
    </div>
</template>

<script>
import BlogIntro from "@/components/pages/Home/Intro/Intro";
import BlogRecentBlogs from "@/components/pages/Home/RecentBlogs/RecentBlogs";

export default {
  name: "home",

  data() {
    return {};
  },

  components: {
    BlogIntro: BlogIntro,
    BlogRecentBlogs: BlogRecentBlogs,
  }
};
</script>

<style scoped>
.motto {
  margin: 180px 0;
  text-align: center;
  font-size: 4em;
}
</style>
