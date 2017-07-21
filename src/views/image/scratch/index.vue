<template>
  <div class="scratch">
    <img src="./img/1.png" width="100%" height="100%" />
    <canvas class="shadow" ref="canvas" @click="clearShadow"></canvas>
  </div>
</template>

<script>

export default {
  name: 'scratch',
  created () {
    this.$nextTick(() => {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#ccc'
      ctx.fillRect(0, 0, 300, 150)
    })
  },
  data () {
    return {
    }
  },
  methods: {
    clearShadow (e) {
      console.log(e.layerX)
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      ctx.clearRect(e.layerX, e.layerY, 10, 10)
    }
  }
}
</script>

<style>
.scratch {
  border: 1px solid #ccc;
  position: relative;
}
.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
