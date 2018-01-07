<template>
  <div :class="['pc-notification-container', {trigger: isShow}]">
    <!-- icon -->
    <div :class="['icon', typeClass]">
      <i v-if="type === 'info'" class="fa fa-info" aria-hidden="true"></i>
      <i v-if="type === 'success'" class="fa fa-check" aria-hidden="true"></i>
      <i v-if="type === 'danger'" class="fa fa-times" aria-hidden="true"></i>
      <i v-if="type === 'warning'" class="fa fa-exclamation" aria-hidden="true"></i>
    </div>

    <!-- title -->
    <div class="title">
      <span >{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    typeClass() {
      return `${this.type}-bg`
    }
  }
};
</script>

<style scoped>
@keyframes show {
  0% {
    opacity: 0;
    top: 15%;
  }

  25% {
    opacity: 1;
    top: 20%;
  }

  75% {
    opacity: 1;
    top: 20%;
  }

  100% {
    opacity: 0;;
    top: 15%;
  }
}

.danger-note .icon {
  background: #F56C6C
}

.pc-notification-container {
  position: fixed;
  left: 50%;
  top: 20%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  background: white;
  opacity: 0;
}

.trigger {
  animation: 3s show;
}

/* icons style */
.icon {
  padding: 13px 15px;
  color: white;
}

/* title style */
.title {
  padding: 13px 20px;
}
</style>
