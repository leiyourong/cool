<template>
  <div class="slideEvent">
    <div class="box" @touchstart="touchstart" @touchend="touchend">
      <div :id="i-1" class="box-item" :isNew="i-1 === newIndex" :type="mapValues[i-1]" v-for="i in 16">{{ mapValues[i-1] }}</div>
    </div>
    <div class="score">
      {{ score }}
      <input type="button" value="开始游戏" v-if="typeof score !== 'number'" @click="initGame" />
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
      mapValues: Array(16).fill(0),
      newIndex: -1,
      score: 2
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
      this.mapValues = Array(16).fill(0)
      this.score = 2
      this.makeElement(true)
      this.makeElement(true)
    },
    makeElement (isInit) {
      var availArr = this.getAvailArr()
      // 生成数据
      var arrLength = availArr.length
      if (arrLength) {
        var randomIndex = Math.floor(Math.random() * arrLength)
        if (!isInit) {
          this.newIndex = availArr[randomIndex]
        }
        this.$set(this.mapValues, availArr[randomIndex], 2)
      }
      if(this.isOver()){
        this.score = '游戏结束！'
      }
    },
    isOver () {
      for (var i=0; i<16; i+=4) {
        for (var j=i,times=0;times<3;times++,j++) {
          if(this.mapValues[j] === this.mapValues[j+1]) {
            return false
          }
        }
      }
      for (var i=0; i<4; i+=1) {
        for (var j=i,times=0;times<3;times++,j+=4) {
          if(this.mapValues[j] === this.mapValues[j+4]) {
            return false
          }
        }
      }
      return true
    },
    // 计算出可用的数组
    getAvailArr () {
      var availArr = []
      for (var i=0; i<16; i++) {
        !this.mapValues[i] && availArr.push(i)
      }
      return availArr
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
      var times1=4
      var makeFlag = false

      while (times1) {
        for (var times2=4,index = start,exChangeIndex = -1; times2>0; times2--,index += offset) {
          if(this.mapValues[index] !== 0){
            if (exChangeIndex === -1) {
              exChangeIndex = index
            } else if(this.mapValues[index] === this.mapValues[exChangeIndex]) {
              makeFlag = true
              var score = this.mapValues[index] + this.mapValues[exChangeIndex]
              if (score > this.score) {
                this.score = score
              }
              this.$set(this.mapValues, exChangeIndex, score)
              this.$set(this.mapValues, index, 0)
              exChangeIndex = -1
            } else {
              exChangeIndex = index
            }
          }
        }
        for (var compareIndex=start,times3=3;times3>0;compareIndex+=offset,times3--){
          if (!this.mapValues[compareIndex]) {
            for (var j=compareIndex+offset,c=times3;c>0;c--,j+=offset) {
              if (this.mapValues[j]) {
                makeFlag = true
                this.$set(this.mapValues, compareIndex, this.mapValues[j])
                this.$set(this.mapValues, j, 0)
                break
              }
            }
          }
        }
        times1--
        start+=startOffset
      }
      makeFlag && this.makeElement()
    }
  }
}
</script>

<style src="./2048.css" scoped></style>
