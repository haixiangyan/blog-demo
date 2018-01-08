<template>
  <div id="app">
    <!-- admin header -->
    <admin-header></admin-header>
    
    <!-- admin menu -->
    <admin-menu></admin-menu>

    <router-view class="content"/>
  </div>
</template>

<script>
import AdminMenu from '@/components/common/Menu/Menu';
import AdminHeader from '@/components/common/Header/Header';

export default {
  name: 'app',

  components: {
    AdminMenu,
    AdminHeader
  }
}
</script>

<style>
#app {
  position: relative;
}

.content {
  position: absolute;
  top: 50px;
  left: 201px;
}
</style>
