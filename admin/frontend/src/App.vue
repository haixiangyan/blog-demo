<template>
  <div id="app">
    <!-- admin header -->
    <admin-header></admin-header>
    
    <!-- admin menu -->
    <admin-menu></admin-menu>

    <!-- notification -->
    <blog-notification :title="title" :type="type" :isShow="isShow"></blog-notification>

    <!-- page router view -->
    <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
      <router-view class="animated content"/>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";

import AdminMenu from "@/components/common/Menu/Menu";
import AdminHeader from "@/components/common/Header/Header";
import BlogNotification from "@/components/common/Notification/Notification";


export default {
  name: "app",

  computed: {
    ...mapState({
      isShow: state => state.notification.isShow,
      title: state => state.notification.title,
      type: state => state.notification.type
    })
  },

  components: {
    AdminMenu,
    AdminHeader,
    BlogNotification
  },
};
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
