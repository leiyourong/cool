<template>
  <div class="slideEvent">
    <div class="box" @touchstart="touchstart" @touchend="touchend">
      <div :id="i-1" class="box-item" :type="mapValues[i-1]" v-for="i in 16">{{ mapValues[i-1] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.initGame()
  },
  data () {
    return {
      startX: 0,
      startY: 0,
      mapValues: Array(16).fill(0)
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
      if (Math.abs(offsetX) > Math.abs(offsetY)) {
        dir = offsetX > 0 ? 'e' : 'w'
      } else {
        dir = offsetY > 0 ? 's' : 'n'
      }
      this.mergeElement(dir)
    },
    initGame () {
      this.mapValues[0] = 2
      this.mapValues[1] = 2
      this.mapValues[2] = 4
      this.mapValues[3] = 8
      // this.makeElement()
      // this.makeElement()
    },
    makeElement () {
      // 计算出可用的数组
      var availArr = []
      for (var i=0; i<=16; i++) {
        !this.mapValues[i] && availArr.push(i)
      }

      // 生成数据
      var arrLength = availArr.length
      if (arrLength) {
        var randomIndex = Math.floor(Math.random() * arrLength)
        this.mapValues[availArr[randomIndex]] = 2
      } else {
        alert('Game Over!')
      }
    },
    mergeElement (dir) {
      var start = 0
      var startOffset = 0
      var offset = 0
      switch (dir) {
        // 右
        case 'e':
          start = 3
          startOffset = 4
          offset = -1
          break;
        case 'w':
          start = 0
          startOffset = 4
          offset = 1
          break;
        case 'n':
          start = 0
          startOffset = 1
          offset = 4
          break;
        case 's':
          start = 12
          startOffset = 1
          offset = -4
          break;
        default:
          break;
      }
      if (offset !== 0) {
        this.merge(start, startOffset, offset)
      }
    },
    // start:开始元素 startOffset: 开始元素间距 offset：同行（列）间距
    merge (start, startOffset, offset) {
      var times1=4, times2, times3
      while (times1) {
        var compareIndex = start
        var canMerge = true
        times2 = 4
        while (times2) {
          var index = compareIndex
          var times3 = times2 - 1
          var canMergeExt = canMerge
          while (times3) {
            if(this.mapValues[index+offset] !== 0){
              if(this.mapValues[index] === this.mapValues[index+offset] && (canMergeExt || times3 !== 3)){
                this.$set(this.mapValues, index, this.mapValues[index] + this.mapValues[index+offset])
                this.$set(this.mapValues, index+offset, 0)
                canMerge = false
              } else if (this.mapValues[index] === 0) {
                this.$set(this.mapValues, index, this.mapValues[index] + this.mapValues[index+offset])
                this.$set(this.mapValues, index+offset, 0)
              }
            }
            index += offset
            times3--
          }
          times2--
        }
        times1--
        start+=startOffset
      }
      this.makeElement()
    }
  }
}
</script>

<style src="./2048.css" scoped></style>
