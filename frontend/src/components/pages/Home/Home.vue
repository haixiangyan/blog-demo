<template>
    <div>
        <blog-nav></blog-nav>
        <blog-base></blog-base>

        <!-- Motto -->
        <h3 class="motto motto-font">If we dream, everything is possible.</h3>

        <!-- Introduction of Blog -->
        <blog-intro></blog-intro>

        <!-- Footer -->
        <blog-footer></blog-footer>
    </div>
</template>

<script>
import BlogNav from "@/components/common/Nav/Nav";
import BlogBase from "@/components/common/Base/Base";

// Import Intro component
import BlogIntro from "@/components/pages/Home/Intro/Intro";
// Import Footer component
import BlogFooter from "@/components/common/Footer/Footer";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    BlogNav: BlogNav,
    BlogBase: BlogBase,
    BlogIntro: BlogIntro,
    BlogFooter: BlogFooter,
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
