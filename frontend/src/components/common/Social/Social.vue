<template>
  <div :class="['social-container', {inverse: isInverse}]">
    <!-- wechat account -->
    <div class="social-wechat social-item">
      <router-link to="/">
        <i class="fa fa-weixin" aria-hidden="true"></i>
      </router-link>

      <!-- qr image -->
      <img class="wechat-qr-img" :src="wechatQrSrc" alt="Wechat qr image">
    </div>

    <!-- qq account -->
    <div class="social-qq social-item">
      <router-link  to="/">
        <i class="fa fa-qq" aria-hidden="true"></i>
      </router-link>

      <!-- qr image -->
      <img class="qq-qr-img" :src="qqQrSrc" alt="QQ qr image">
    </div>

    <!-- linkedin account -->
    <a class="social-item" :href="linkedinAddr" target="_blank">
      <i class="fa fa-linkedin" aria-hidden="true"></i>
    </a>

    <!-- facebook account -->
    <a class="social-item" :href="fbAddr" target="_blank">
      <i class="fa fa-facebook" aria-hidden="true"></i>
    </a>
    
    <!-- twitter account -->
    <a class="social-item" :href="twitterAddr" target="_blank">
      <i class="fa fa-twitter" aria-hidden="true"></i>
    </a>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      qqQrSrc: '/static/img/social/qq_qr.jpg',
      wechatQrSrc: '/static/img/social/wechat_qr.jpg',
      linkedinAddr: 'https://www.linkedin.com/in/%E6%B5%B7%E7%BF%94-%E4%B8%A5-0b9744150/',
      fbAddr: 'https://www.facebook.com/yan.haixiang',
      twitterAddr: 'https://twitter.com/HaixiangYan',
    };
  },
  props: {
    isInverse: Boolean
  }
}
</script>

<style scoped>
.social-container {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* inverse style */
.social-item {
  padding: 0 10px;
}

.social-item i {
  color: white;
  font-size: 1.4em;
}

/* wechat and qq social style */
.social-wechat,
.social-qq {
  position: relative;
}

/* wechat and qq qr code style */
.wechat-qr-img,
.qq-qr-img {
  visibility: hidden;
  position: absolute;
  bottom: 100%;
  left: -150%;
  opacity: 0;
  max-width: 170px;
  transition: all .35s;
}

/* wechat qr image */
.social-wechat:hover > .wechat-qr-img,
.social-qq:hover > .qq-qr-img {
  opacity: 1;
  visibility: visible;
}
</style>
