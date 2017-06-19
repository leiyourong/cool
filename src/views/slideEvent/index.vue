<template>
  <div class="slideEvent">
    <div class="box">
      <div :id="i-1" class="box-item" v-for="i in 16" @touchstart="touchstart" @touchend="touchend">{{ values[i-1] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.initBox()
  },
  data () {
    return {
      targetId: 0,
      startX: 0,
      startY: 0,
      mapValues: Array(16).fill(0)
    }
  },
  methods: {
    touchstart (e) {
      this.startX = e.touches[0].clientX
      this.startY = e.touches[0].clientY
      this.targetId = +e.target.id
    },
    touchend (e) {
      var start = Math.floor(this.targetId  / 4) * 4 + 1
      var isBlankLine = true
      for (var i=start; i<start+4; i++) {
        if(this.mapValues[i]) {
          isBlankLine = false
          break;
        }
      }
      if (isBlankLine) return

      var dir = ''
      var offsetX = e.changedTouches[0].clientX - this.startX
      var offsetY = e.changedTouches[0].clientY - this.startY
      if (Math.abs(offsetX) > Math.abs(offsetY)) {
        dir = offsetX > 0 ? 'e' : 'w'
      } else {
        dir = offsetY > 0 ? 's' : 'n'
      }
      this.mergeNum(start, dir)
    },
    initGame () {
      this.makeNum()
      this.makeNum()
    },
    makeNum () {
      var availArr = []
      for (var i=0; i<=16; i++) {
        !this.mapValues[i] && availArr.push(i)
      }
      var arrLength = availArr.length
      if (arrLength) {
        var randomIndex = Math.floor(Math.random() * arrLength)
        this.mapValues[availArr[randomIndex]] = 2
      } else {
        alert('Game Over!')
      }
    },
    mergeNum (start, dir) {
      var offset = 0
      var end = start + 3
      switch (dir) {
        // 右
        case 'e':
          offset = -1
          while (index % 4 !== 0) {
            index+=size
            if (this.values[index]) {
              endId = index
              break
            }
          }
          break;
        case 'w':
          break;
        case 'n':
          break;
        case 's':
          break;
        default:
          break;
      }
    },
    resolveMove (offset, endId) {
      var curIndex = endId,
        cursor
      if (this.mapValues[endId]) {

      }
      var cursor = endId
      while(cursor)
    }
  }
}
</script>

<style scoped>
.box {
  width: 280px;
  height: 280px;
  display: flex;
  flex-wrap: wrap;
  /*background: #ccc;*/
  border: 1px solid red;
  /*background: #ffbc20;*/
  margin: 10px auto;
  text-align: center;
}
.box-item {
  width: 60px;
  height: 60px;
  background: #ccc;
  margin: 5px;
  color: red;
  font-size: 16px;
  text-align: center;
  line-height: 60px;
}
</style>
