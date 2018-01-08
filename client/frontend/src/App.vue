<template>
  <div id="app">
    <!-- nav bar -->
    <blog-nav></blog-nav>

    <!-- base background -->
    <blog-base></blog-base>

    <!-- notification -->
    <blog-notification :title="title" :type="type" :isShow="isShow"></blog-notification>

    <!-- page router view -->
    <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
      <router-view class="animated"/>
    </transition>

    <!-- footer -->
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import { mapState } from "vuex";

import BlogNav from "@/components/common/Nav/Nav";
import BlogBase from "@/components/common/Base/Base";
import BlogNotification from "@/components/common/Notification/Notification";
import BlogFooter from "@/components/common/Footer/Footer";

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
    BlogNav,
    BlogBase,
    BlogNotification,
    BlogFooter
  }
};
</script>

<style>
</style>
