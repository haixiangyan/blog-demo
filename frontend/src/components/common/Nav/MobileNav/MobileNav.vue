<template>
  <div class="mobile-nav-container">
      <div @click="dropdown" class="name motto-font">
          <span class="motto-font">Haixiang Yan</span>
          <i v-bind:class="['fa', {'fa-angle-down': !isShow , 'fa-angle-up': isShow}]" aria-hidden="true"></i>
      </div>

      <!-- Main navigation -->
      <transition enter-active-class="fadeInDown" leave-active-class="fadeOutUp">
        <nav class="animated" v-show="isShow">
            <router-link to="/" class="nav-item" tag="div">Home</router-link>
            <router-link to="/blog" class="nav-item" tag="div">Blog</router-link>
            <router-link to="/about" class="nav-item" tag="div">About</router-link>
            <router-link to="/contact" class="nav-item" tag="div">Contact</router-link>
        </nav>
      </transition>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    dropdown() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style scoped>
/* Name style */
.name {
  margin: 100px 0 70px;
  font-size: 1.7em;
  cursor: pointer;
}

/* Navigation CSS style */
nav {
  margin: 0 auto;
  width: 70%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-around;
}

.nav-item {
  padding: 20px;
  border-bottom: 1px solid black;
}

a {
  color: black;
  text-decoration: none;
}

.nav-item:hover {
  color: rgb(160, 160, 160);
  transition: color 0.3s;
  cursor: pointer;
}

.router-link-active {
  color: rgb(160, 160, 160);
}
</style>
