<template>
  <div class="notification-container">
    <!-- mobile notification -->
    <blog-mobile-notification class="is-mobile" :isShow="isShow" :title="title" :type="type"></blog-mobile-notification>

    <!-- pc notification -->
    <blog-pc-notification class="is-pc" :isShow="isShow" :title="title" :type="type"></blog-pc-notification>
  </div>
</template>

<script>
import BlogMobileNotification from '@/components/common/Notification/MobileNotification/MobileNotification';
import BlogPcNotification from '@/components/common/Notification/PCNotification/PCNotification';

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },

  components: {
    BlogMobileNotification,
    BlogPcNotification
  }
}
</script>

<style scoped>

</style>
