<template>
  <div class="image-container">
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String
  }
}
</script>

<style scoped>

.image-container img {
  max-width: 100%;
}
</style>
