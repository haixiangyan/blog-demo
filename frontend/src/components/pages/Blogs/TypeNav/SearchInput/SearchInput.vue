<template>
  <div class="search-input-container">
    <div v-show="isShow" class="input-container">
      <i @click="search" class="fa fa-search" aria-hidden="true"></i>
      <input type="search" v-model="keyword">
      <i @click="show" class="fa fa-times" aria-hidden="true"></i>
    </div>

    <i v-show="!isShow" class="fa fa-search trigger" @click="show" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      keyword: ''
    };
  },

  methods: {
    show() {
      this.isShow = !this.isShow;
    },

    search() {
      let result = '';

      // send request to search keyword
      this.$axios({
        method: 'get',
        url: `/search/q=${this.keyword}`
      })
      .then((response) => {
        console.log(response)
      })

      this.$emit('result', this.keyword, result);
    }
  }
}
</script>

<style scoped>
input {
  width: 200px;
  border: none;
  font-size: 1em;
  outline: none;
  background: transparent;
}

i {
  cursor: pointer;
  transition: all .35s;
}

i:hover {
  font-weight: bold;
  color: rgb(160, 160, 160);
}

.input-container {
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 5px;
  transition: all .35s;
}

.input-container input {
  flex-grow: 1;
}
</style>
