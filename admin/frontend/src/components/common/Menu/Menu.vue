<template>
  <div class="menu-container">
    <!-- title -->
    <div class="title">
      My blogs
    </div>

    <!-- menu items container -->
    <div class="menu-items-container">
      <admin-menu-item v-for="menuItem in menu" :key="menuItem.title" :menuItem="menuItem"></admin-menu-item>
    </div>
  </div>
</template>

<script>
import AdminMenuItem from '@/components/common/Menu/Item/Item';

export default {
  data() {
    return {
      menu: [
        {
          title: "Coding",
          icon: "fa fa-laptop",
          types: [
            {
              typeName: "Frontend",
            },
            {
              typeName: "Backend",
            }
          ]
        },
        {
          title: "Life",
          icon: "fa fa-bath",
          types: [
            {
              typeName: "Life in China",
            },
            {
              typeName: "Life in UCI",
            }
          ]
        }
      ]
    };
  },

  components: {
    AdminMenuItem
  }
};
</script>

<style scoped>
.menu-container {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  width: 200px;
  padding: 30px 0;
  border-right: 1px solid silver;
}

.title {
  padding: 0 10px;
  color: #7a7a7a;
  font-size: 1.2em;
}

/* menu items container */
.menu-items-container {
  margin-top: 20px;
}
</style>
