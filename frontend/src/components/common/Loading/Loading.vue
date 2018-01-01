<template>
  <div class="loading-container">
    <div class="loading-logo">
      <div class="loading-item"></div>
      <div class="loading-item"></div>
      <div class="loading-item"></div>
      <div class="loading-item"></div>
      <div class="loading-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
@keyframes loading {
  0% {
    height: 0;
  }
  
  50% {
    height: 30px;
  }

  100% {
    height: 0;
  }
}

.loading-container {
  text-align: center;
  height: 200px;
}

.loading-logo {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}


.loading-item {
  margin: 0 2px;
  border-left: 5px solid black;
  animation: 1s loading infinite;
}

/* loading anmiation settings */

.loading-item:nth-child(1) {
  animation-delay: .5s;
}

.loading-item:nth-child(2) {
  animation-delay: .25s;
}

.loading-item:nth-child(3) {
  animation-delay: .125s;
}

.loading-item:nth-child(4) {
  animation-delay: .0625s;
}

.loading-item:nth-child(5) {
  animation-delay: .03125s;
}

</style>
