<template>
  <div class="header-container">
    <img :src="avatar" alt="avatar" class="avatar">

    <div class="title">Blog System 1.0</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: '/static/img/header/avatar.JPG'
    };
  }
}
</script>

<style scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  padding: 0 50px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px silver;
  z-index: 3;
}

/* title style */

.title {
  font-family: sacramento, cursive;
}

/* avatar style */

.avatar {
  margin-right: 10px;
  max-width: 30px;
  border-radius: 50%;
  border: 1px solid silver;
}
</style>
