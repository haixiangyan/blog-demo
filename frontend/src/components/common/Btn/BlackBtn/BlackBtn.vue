<template>
  <router-link class="black-btn" :to="link">
    {{title}}
  </router-link>
</template>

<script>
export default {
  props: {
    link: String,
    title: String
  }
}
</script>

<style scoped>
.black-btn {
  display: inline;
  padding: 10px 30px;
  background: black;
  color:white;
  transition: all .35s;
}

.black-btn:hover {
  color: #2F2E2E;
  background: rgb(213, 239, 254);
}
</style>
