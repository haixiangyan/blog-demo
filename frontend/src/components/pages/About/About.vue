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
        title: `Hi! I'm Haixiang, a serious coder.`,
        content: `I'm Haixiang Yan, studying in UCI (University of California, Irvine) and working on Front end development. 
        I have rich experience of using JavaScript, HTML 5, CSS 3. I'm also famliar with using Vue.js, webpack and es6.
        
        I love playing Guitar and computer games. One of my faviorite games is Overwatch, and I am really good at widow :) You can join me any time. I'm so happy to play with you. `,
        introImg: "/static/img/about/intro.jpg"
      }
    };
  },

  components: {
    BlogNav: BlogNav,
    BlogBase: BlogBase,
    BlogFooter: BlogFooter,
    BlogSoical: BlogSoical
  },
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
