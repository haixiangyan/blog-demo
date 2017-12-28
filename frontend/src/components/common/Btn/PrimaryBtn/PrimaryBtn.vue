<template>
  <div class="black-btn-container">
    <!-- link mode -->
    <router-link v-if="link" class="black-btn" :to="link">
      {{title}}
    </router-link>

    <!-- button mode -->
    <button v-if="!link" class="black-btn" @click="click">
      {{title}}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    title: String,
    click: Function,
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

button {
  color: white;
  background: black;
  cursor: pointer;
  font-size: 1em;
  outline: none;
}
</style>
