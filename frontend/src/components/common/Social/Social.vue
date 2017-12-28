<template>
  <div :class="['social-container', {inverse: isInverse}]">
    <!-- wechat account -->
    <router-link to="/">
      <i class="fa fa-weixin" aria-hidden="true"></i>
    </router-link>

    <!-- qq account -->
    <router-link to="/">
      <i class="fa fa-qq" aria-hidden="true"></i>
    </router-link>

    <!-- linkedin account -->
    <router-link to="/">
      <i class="fa fa-linkedin" aria-hidden="true"></i>
    </router-link>

    <!-- facebook account -->
    <router-link to="/">
      <i class="fa fa-facebook" aria-hidden="true"></i>
    </router-link>
    
    <router-link to="/">
      <i class="fa fa-twitter" aria-hidden="true"></i>
    </router-link>
    
  </div>
</template>

<script>
export default {
  props: {
    isInverse: Boolean
  }
}
</script>

<style scoped>
.social-container {
  text-align: center;
}

/* inverse style */
.inverse i {
  color: white;
}

a {
  padding: 7px;
}

i {
  font-size: 1.5em;
}
</style>
