<template>
  <div class="inverse-btn-container">
    <router-link v-if="link" :to="link" class="inverse-btn">
      {{title}}
    </router-link>

    <button @click="click" v-else class="inverse-btn">
      {{title}}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
    click: Function,
  }
}
</script>

<style scoped>
.inverse-btn-container {
}

.inverse-btn {
  padding: 10px 30px;
  color: white;
  border: 2px solid white;
  transition: all .35s;
  box-sizing: border-box;
}

.inverse-btn:hover {
  color: black;
  background: rgb(213, 239, 254);
  border: 2px solid rgb(213, 239, 254);
}

button {
  color: white;
  background: black;
  cursor: pointer;
  font-size: 1em;
  outline: none;
}
</style>

