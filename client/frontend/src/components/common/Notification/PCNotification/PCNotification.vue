<template>
  <div>
    <div :class="['pc-notification-container', {trigger: isShow}, typeName]">
      <!-- icon -->
      <div :class="['icon']">
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
    typeName() {
      return `${this.type}-note`;
    }
  }
};
</script>

<style scoped>
@keyframes show {
  0% {
    opacity: 0;
    right: 0%;
  }

  25% {
    opacity: 1;
    right: 5%;
  }

  75% {
    opacity: 1;
    right: 5%;
  }

  100% {
    opacity: 0;
    right: 0%;
  }
}

.trigger {
  animation: 5s show;
}

/* container style */
.pc-notification-container {
  position: fixed;
  top: 10%;
  right: 5%;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 8px #909399;
  opacity: 0;
}

/* icon style */
.icon {
  padding-right: 10px;
}

/* info type style */
.info-note {
  border: 1px solid #409EFF;
}

.info-note .icon i {
  color: #409EFF;
}

/* success type style */
.success-note {
  border: 1px solid #67C23A;
}

.success-note .icon i {
  color: #67C23A;
}

/* warning type style */
.warning-note {
  border: 1px solid #E6A23C;
}

.warning-note .icon i {
  color: #E6A23C;
}

/* danger type style */
.danger-note {
  border: 1px solid #F56C6C;
}

.danger-note .icon i {
  color: #F56C6C;
}
</style>
