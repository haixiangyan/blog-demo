<template>
  <div class="search-input-container">
    <div v-show="isShow" :class="['input-container', { 'invalid' : !isValid }]">
      <i @click="search" class="fa fa-search" aria-hidden="true"></i>
      <input @keyup.enter="search" type="search" v-model="keyword">
      <i @click="show" class="fa fa-times" aria-hidden="true"></i>
    </div>

    <i v-show="!isShow" class="fa fa-search trigger" @click="show" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isValid: true,
      isShow: false,
      keyword: "Input keyword"
    };
  },

  watch: {
    keyword() {
      if (this.keyword === "") {
        this.isValid = false;
      }
      else {
        this.isValid = true;
      }
    }
  },

  methods: {
    show() {
      this.isShow = !this.isShow;
    },

    search() {
      if (!this.isValid) {
        return;
      }

      this.$emit('beginSearch');

      // send request to search keyword
      this.$axios({
        method: "get",
        url: `/search?q=${this.keyword}`
      }).then(response => {
        let data = response.data;

        if (data.type === "success") {
          this.$emit("search", this.keyword, data.data);
        } else {
          console.error("error");
        }
      });
    }
  }
};
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
  transition: all 0.35s;
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
  transition: all 0.35s;
}

.input-container input {
  flex-grow: 1;
}

.invalid {
  border-bottom: 1px solid #f56c6c;
}

.invalid i {
  color: #f56c6c;
}
</style>
