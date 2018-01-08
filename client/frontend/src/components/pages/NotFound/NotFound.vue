<template>
  <div class="not-found-container white-bg">
    <!-- title -->
    <p class="not-found-title title-font-size danger-font-color">404 Error, can't find this page :(</p>

    <div class="canvas-container">
      <!-- inner canvas -->
      <canvas class="inner-canvas" width="300" height="300" ref="innerCanvas"></canvas>
      <!-- middle canvas -->
      <canvas class="middle-canvas" width="300" height="300" ref="middleCanvas"></canvas>
      <!-- outer canvas -->
      <canvas class="outer-canvas" width="300" height="300" ref="outerCanvas"></canvas>
    </div>    
  </div>
</template>

<script>
export default {
  methods: {
    drawOrbit(canvas, context, radius) {
      context.beginPath();
      context.lineWidth = 1;
      context.strokeStyle = "black";
      context.arc(
        canvas.width / 2,
        canvas.height / 2,
        radius,
        0,
        Math.PI * 2,
        true
      );
      context.stroke();
      context.closePath();
    },

    drawPlanet(canvas, context, radius, offset) {
      context.beginPath();
      context.fillStyle = "black";
      context.arc(
        canvas.width / 2 + offset,
        canvas.height / 2,
        radius,
        0,
        Math.PI * 2,
        true
      );
      context.fill();
      context.beginPath();
    }
  },

  mounted() {
    // Get canvas context
    let innerCanvas = this.$refs.innerCanvas;
    let innerContext = innerCanvas.getContext("2d");
    let middleCanvas = this.$refs.middleCanvas;
    let middleContext = middleCanvas.getContext("2d");
    let outerCanvas = this.$refs.outerCanvas;
    let outerContext = outerCanvas.getContext("2d");

    // draw origin point
    this.drawPlanet(innerCanvas, innerContext, 9, 0);

    // draw inner orbit
    this.drawOrbit(innerCanvas, innerContext, 40);

    // draw inner planet
    this.drawPlanet(innerCanvas, innerContext, 9, 40);

    // draw middle orbit
    this.drawOrbit(middleCanvas, middleContext, 60);

    // draw middle planet
    this.drawPlanet(middleCanvas, middleContext, 5, 60);

    // draw outer orbit
    this.drawOrbit(outerCanvas, outerContext, 80);

    // draw outer planet
    this.drawPlanet(outerCanvas, outerContext, 7, 80);
  }
};
</script>

<style scoped>
@keyframes innerRotating {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes middleRotating {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(-360deg);
  }
}

@keyframes outerRotating {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* title style */
.not-found-title {
  text-align: center;
  padding: 20px 0;
}

/* canvas style */

canvas {
  background: transparent;
}

.canvas-container {
  display: flex;
  justify-content: center;
  position: relative;
}

.inner-canvas {
  animation: innerRotating 2s infinite linear;
}

.middle-canvas {
  position: absolute;
  animation: middleRotating 3s infinite linear;
}

.outer-canvas {
  position: absolute;
  animation: outerRotating 1s infinite linear;
}
</style>
