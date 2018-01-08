<template>
  <div @click="trigger" class="menu-item-container">
    <div class="title">
      <i :class="menuItem.icon"></i>
      <span>{{menuItem.title}}</span>
    </div>

    <div class="dropdown-icon">
      <i :class="['fa fa-caret-down', {'is-show': isShow, 'is-hide': !isShow}]"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuItem: {
      type: Object,
      default: {
        title: '',
        icon: '',
        link: '',
        blogs: []
      }
    }
  },

  data() {
    return { 
      isShow: false
    }
  },

  methods: {
    trigger() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style scoped>
.is-show {
  transform: rotate(180deg);
  transition: .35s transform;
}

.is-hide {
  transform: rotate(0deg);
  transition: .35s transform;
}

.menu-item-container {
  padding: 0 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.menu-item-container:hover {
  background-color: #f5f5f5;
  color: #00d1b2;
}

/* title style */
.title {
}

/* dropdown icon style */
.dropdown-icon {

}
</style>
