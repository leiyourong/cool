<template>
  <div class="slideEvent">
    <div class="box" @touchstart="touchstart" @touchend="touchend">
      测试鼠标的滑动方向
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      startX: 0,
      startY: 0
    }
  },
  methods: {
    touchstart (e) {
      this.startX = e.touches[0].clientX
      this.startY = e.touches[0].clientY
    },
    touchend (e) {
      var dir = ''
      var offsetX = e.changedTouches[0].clientX - this.startX
      var offsetY = e.changedTouches[0].clientY - this.startY
      dir += Math.abs(offsetX) > 10 ? (offsetX > 0 ? '右' : '左') : ''
      dir += Math.abs(offsetY) > 10 ? (offsetY > 0 ? '下' : '上') : ''
      if (dir) {
        e.target.innerHTML = '往' + dir + '方向滑动,<br>offsetX = ' + offsetX + ',offsetY = ' + offsetY
      } else {
        e.target.innerHTML = '未滑动或滑动距离太小'
      }
    }
  }
}
</script>

<style scoped>
.box {
  width: 300px;
  height: 200px;
  background: #ffbc20;
  margin: 10px auto;
  text-align: center;
}
</style>
