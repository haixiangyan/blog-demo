<template>
  <div :class="['menu-item-container', {'is-show': isShow, 'is-hide': !isShow}]">
    <!-- menu header container -->
    <div @click="trigger"  class="menu-header-container">
      <div class="title">
        <i :class="menuItem.icon"></i>
        <span>{{menuItem.title}}</span>
      </div>

      <div class="dropdown-icon">
        <i class="fa fa-caret-down"></i>
      </div>
    </div>

    <!-- sub menu -->
    <div class="sub-menu-container" :style="isShow ? foldClass : unfoldClass">
      <div class="sub-menu-item" v-for="subMenuItem in menuItem.topics" :key="subMenuItem.name">{{subMenuItem.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuItem: {
      type: Object,
      default: {
        title: "",
        icon: "",
        link: "",
        topics: []
      }
    }
  },

  data() {
    return {
      isShow: false,
      foldClass: {
        height: `${this.menuItem.topics.length * 50}px`,
        transition: `.35s height`
      },
      unfoldClass: {
        height: `0px`,
        transition: `.35s height`
      }
    };
  },

  methods: {
    trigger() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style scoped>
.is-show .menu-header-container {
  background: #00d1b2;
  color: white;
  transition: .35s all;
}

.is-show .dropdown-icon {
  transform: rotate(180deg);
  transition: 0.35s transform;
}

.is-hide .dropdown-icon {
  transform: rotate(0deg);
  transition: 0.35s transform;
}

.menu-item-container {
  height: auto;
  position: relative;
  overflow: hidden;
}

/* menu header style */
.menu-header-container {
  padding: 0 20px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-sizing: border-box;
}

.menu-header-container:hover {
  background-color: #f5f5f5;
  color: #00d1b2;
}

/* title style */
.title {
}

/* dropdown icon style */
.dropdown-icon {
}

/* sub menu style */
.sub-menu-container {
  margin-left: 30px;
  padding-left: 10px;
  border-left: 2px solid silver;
}

/* sub menu item sytle */
.sub-menu-item {
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;
}

.sub-menu-item:hover {
  color: #00d1b2;
}
</style>
