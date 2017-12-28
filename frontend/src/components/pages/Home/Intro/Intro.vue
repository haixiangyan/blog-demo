<template>
  <div class="white-bg">
      <div class="max-container intro-container">

        <div class="column">
          <div class="intro-blog">
            <p class="intro-item-header motto-font">Read</p>
            <p class="intro-item-body sub-title-font">THE BLOG</p>
            <blog-black-btn link="/blog" title="Read Blogs"></blog-black-btn>
          </div>
          
          <div class="intro-about">
            <p class="intro-item-header motto-font">Hello</p>
            <p class="intro-item-body sub-title-font">I'm Haixiang</p>
            <blog-black-btn link="/about" title="About me"></blog-black-btn>
          </div>
        </div>

        <div class="column">
          <div class="intro-talk">
            <p class="intro-item-header motto-font">Talk</p>
            <p class="intro-item-body sub-title-font">TO ME</p>
            <blog-black-btn link="/contact" title="Contact Me"></blog-black-btn>
          </div>
          
          <div class="intro-contact">
            <p class="intro-item-header motto-font">Contribute</p>
            <p class="intro-item-body sub-title-font">TO THE BLOG</p>
            <blog-black-btn link="/contact" title="Contact Me"></blog-black-btn>
          </div>
        </div>
          
      </div>
  </div>
</template>

<script>
import BlogBlackBtn from '@/components/common/Btn/BlackBtn/BlackBtn';

export default {
  components: {
    'blogBlackBtn': BlogBlackBtn
  }
};
</script>

<style scoped>
.intro-container {
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}

.column {
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
