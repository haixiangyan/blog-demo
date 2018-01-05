<template>
  <div class="nav-item-container">
    <!-- title container -->
    <div @click="dropdown" class="title-container">
      <span class="title">{{navItemInfo.title}}</span>
      <div v-if="navItemInfo.subNav.length !== 0" class="caret">
        <i v-show="isShow" class="fa fa-caret-up" aria-hidden="true"></i>
        <i v-show="!isShow" class="fa fa-caret-down" aria-hidden="true"></i>
      </div>
    </div>

    <!-- sub nav container -->
    <transition enter-active-class="fadeInDown" leave-active-class="fadeOut">
      <div v-show="isShow" class="animated sub-nav-container">
        <div class="sub-nav-item" v-for="subNavItem in navItemInfo.subNav" :key="subNavItem.title" @click="search(subNavItem.title)">
          {{subNavItem.title}}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    navItemInfo: {
      type: Object,
      default: {
        title: '',
        subNav: []
      }
    }
  },

  data() {
    return {
      isShow: false
    }
  },

  methods: {
    dropdown() {
      this.isShow = !this.isShow;
    },

    search(title) {
      let result = '';

      // send request to search keyword
      this.$axios({
        method: 'get',
        url: `/search/q=${title}`
      })
      .then((response) => {
        let data = response.data;

        if (data.type === 'success') {
          this.$emit('chooseType', data.data);
        }
        else {
          console.error('error');
        }
      })
    }
  }
}
</script>

<style scoped>
/* title style */
.title-container {
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
}

.title-container:hover {
  border-top: 2px solid rgb(160, 160, 160);
  border-bottom: 2px solid rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

.caret i {
  margin-left: 5px;
}

/* sub container style */
.sub-nav-container {
  background: black;
  color: white;
}

.sub-nav-item {
  text-align: center;
  padding: 15px 0;
  cursor: pointer;
  transition: all .35s;
}

.sub-nav-item:hover {
  background: rgb(143, 159, 168);
}
</style>
