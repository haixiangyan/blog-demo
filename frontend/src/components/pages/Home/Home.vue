<template>
    <div>
        <blog-nav></blog-nav>
        <blog-base></blog-base>

        <!-- Motto -->
        <h3 class="motto motto-font">If we dream, everything is possible.</h3>

        <!-- Introduction of Blog -->
        <blog-intro></blog-intro>
    </div>
</template>

<script>
import BlogNav from "@/components/common/Nav/Nav";
import BlogBase from "@/components/common/Base/Base";

// Import Intro component
import BlogIntro from "@/components/pages/Home/Intro/Intro";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    BlogNav: BlogNav,
    BlogBase: BlogBase,
    BlogIntro: BlogIntro
  }
};
</script>

<style scoped>
.motto {
  margin: 160px 0;
  text-align: center;
  font-size: 4em;
}
</style>
