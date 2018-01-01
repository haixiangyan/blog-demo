<template>
    <div class="about-page">
        <blog-nav></blog-nav>

        <blog-base></blog-base>

        <div class="introduction-container light-blue-bg ">
          <div class="introduction-wrapper max-container">
            <p class="about-title">ABOUT ME</p>

            <img :src="aboutMe.introImg" alt="" class="intro-img">

            <p class="title">{{aboutMe.title}}</p>

            <p class="content pharagraph-font normal-font-color">{{aboutMe.content}}</p>

            <blog-soical :isInverse="true"></blog-soical>
          </div>

        </div>

        <!-- Footer -->
        <blog-footer></blog-footer>
    </div>
</template>

<script>
import BlogNav from "@/components/common/Nav/Nav";
import BlogBase from "@/components/common/Base/Base";
import BlogIntro from "@/components/pages/Home/Intro/Intro";
import BlogFooter from "@/components/common/Footer/Footer";
import BlogSoical from "@/components/common/Social/Social";

export default {
  name: "about",

  data() {
    return {
      aboutMe: {
        title: '',
        content: '',
        introImg: ''
      },
    };
  },

  components: {
    BlogNav: BlogNav,
    BlogBase: BlogBase,
    BlogFooter: BlogFooter,
    BlogSoical: BlogSoical
  },

  mounted() {
    // Send request to get my information
    this.$axios({
      method: 'get',
      url: '/about',
    })
    .then((response) => {
      this.aboutMe = response.data.data;
    })
  }
};
</script>

<style scoped>
/* Introduction container style */
.introduction-container {
  margin-top: 180px;
}

.introduction-wrapper {
  padding: 60px 0;
  text-align: center;
}

/* Introduction about me title */
.introduction-wrapper .about-title {
  font-size: 2em;
  letter-spacing: 0.2em;
  font-family: "libre baskerville", serif;
}

/* Introduction image */
.introduction-wrapper .intro-img {
  text-align: center;
  margin: 30px 0;
  max-width: 80%;
}

/* Introduction title */
.title {
  font-size: 2em;
  font-family: "libre baskerville", serif;
}

.content {
  max-width: 80%;
  margin: 30px auto;
  text-align: center;
}
</style>
