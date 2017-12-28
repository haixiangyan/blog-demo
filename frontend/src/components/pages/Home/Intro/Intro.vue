<template>
  <div class="white-bg">
      <div class="max-container intro-container">

        <!-- First column -->
        <div class="column">
          <!-- blog part -->
          <div class="intro-blog">
            <p class="intro-item-header motto-font">Read</p>
            <p class="intro-item-body sub-title-font">THE BLOG</p>
            <blog-primary-btn link="/blog" title="Read Blogs"></blog-primary-btn>
          </div>
          
          <!-- about part -->
          <div class="intro-about">
            <p class="intro-item-header motto-font">Hello</p>
            <p class="intro-item-body sub-title-font">I'm Haixiang</p>
            <blog-primary-btn link="/about" title="About me"></blog-primary-btn>
          </div>
        </div>

        <!-- Second column -->
        <div class="column">
          <!-- talk part -->
          <div class="intro-talk">
            <p class="intro-item-header motto-font">Talk</p>
            <p class="intro-item-body sub-title-font">TO ME</p>
            <blog-primary-btn link="/contact" title="Contact Me"></blog-primary-btn>
          </div>
          
          <!-- contact part -->
          <div class="intro-contact">
            <p class="intro-item-header motto-font">Contribute</p>
            <p class="intro-item-body sub-title-font">TO THE BLOG</p>
            <blog-primary-btn link="/contact" title="Contact Me"></blog-primary-btn>
          </div>
        </div>
          
      </div>
  </div>
</template>

<script>
import BlogPrimaryBtn from '@/components/common/Btn/PrimaryBtn/PrimaryBtn';

export default {
  components: {
    'blogPrimaryBtn': BlogPrimaryBtn
  }
};
</script>

<style scoped>
.intro-container {
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}

.column {
  padding: 20px 0;
  width: 45%;
  min-width: 400px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
}

/* intro blog styles */
.intro-blog {
  background: url("/static/img/intro/blog.jpg") no-repeat;
}

/* intro contact styles */
.intro-contact {
  background: url("/static/img/intro/contact.jpg") no-repeat;
}

/* intro blog and intro contact styles */
.intro-blog,
.intro-contact {
  height: 500px;
  box-sizing: border-box;
  background-size: cover;
}

.intro-blog > p,
.intro-contact > p {
  text-align: center;
  color:white;
  font-size: 2.5em;
}

.intro-blog > .intro-item-header,
.intro-contact > .intro-item-header {
  margin-top: 40%;
}

.intro-blog > .intro-item-body,
.intro-contact > .intro-item-body  {
  margin: 7%;
}

/* intro talk styles */
.intro-about {
  margin-top: 5%;
}

.intro-talk {
  margin-bottom: 5%;
}

/* intro talk and about contact styles */
.intro-talk,
.intro-about {
  height: 250px;
  border: 5px solid black;
}

.intro-talk > p,
.intro-about > p {
  text-align: center;
  color:black;
  font-size: 2.5em;
}

.intro-talk > .intro-item-header,
.intro-about > .intro-item-header {
  margin-top: 15%;
}

.intro-talk > .intro-item-body,
.intro-about > .intro-item-body  {
  margin: 5%;
}
</style>
