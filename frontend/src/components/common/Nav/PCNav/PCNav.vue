<template>
  <div class="pc-nav-container">
      <div class="name">
          <span class="motto-font">Haixiang Yan</span>
      </div>

      <nav class="max-container">
          <router-link to="/" class="nav-item" tag="div">Home</router-link>
          <router-link to="/blog" class="nav-item" tag="div">Blog</router-link>
          <router-link to="/about" class="nav-item" tag="div">About</router-link>
          <router-link to="/contact" class="nav-item" tag="div">Contact</router-link>
      </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
};
</script>

<style scoped>
/* Name style */
.name {
  margin: 100px 0 70px;
  font-size: 1.7em;
}

/* Navigation CSS style */
nav {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

.nav-item {
  padding: 20px;
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
