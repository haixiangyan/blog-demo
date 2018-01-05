<template>
  <div @mouseleave="hide" class="nav-item-container">
    <!-- title container -->
    <div @click="dropdown" class="title-container">
      <span class="title">{{navItemInfo.title}}</span>
      <i v-if="navItemInfo.subNav.length !== 0" class="fa fa-caret-down" aria-hidden="true"></i>
    </div>

    <!-- sub nav container -->
    <transition name="fade">
      <div v-show="isShow" @mouseleave="hide" class="sub-nav-container">
        <div v-for="subNavItem in navItemInfo.subNav" :key="subNavItem.title" @click="search(subNavItem.title)" class="sub-nav-item">
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
      this.isShow = this.navItemInfo.subNav.length == 0 ? false : !this.isShow;
    },
    
    hide() {
      this.isShow = false;
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
.nav-item-container {
  position: relative;
}

/* title style */
.title-container {
  width: 150px;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
}

.title-container:hover {
  border-top: 2px solid rgb(160, 160, 160);
  border-bottom: 2px solid rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

/* sub navigation style */
.sub-nav-container {
  padding: 10px 0;
  position: absolute;
  top: 40px;
  left: 0;
  border-radius: 4px;
  border: 1px solid rgb(160, 160, 160);
  box-shadow: 0 0 5px rgb(160, 160, 160);
  background: white;
}

.sub-nav-item {
  width: 100px;
  padding: 15px 20px;
  text-align: center;
  cursor: pointer;
}

.sub-nav-item:hover {
  background: #F2F6FC;
  color: rgb(160, 160, 160);
}
</style>
