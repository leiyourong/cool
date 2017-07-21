<template>
  <div class="carousel">
    <transition-group class="image-container" name="fade" tag="div">
      <img v-for="(image, index) in images" v-show="isShow(image.name)" :key="index" class="image-item"  :name="image.name" :src="image.src" width="100%" height="100%" />
    </transition-group>
    <div class="selector-container">
      <div v-for="image in images" :class="[{ 'active': isShow(image.name)}, 'selector-item']" @click="goTo(image.name)"></div>
    </div>
  </div>
</template>

<script>
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'

export default {
  name: 'carousel',
  created () {
    this.startTimer()
  },
  data () {
    return {
      images: [{
        name: '1',
        src: img1
      }, {
        name: '2',
        src: img2
      }, {
        name: '3',
        src: img3
      }, {
        name: '4',
        src: img4
      }],
      currentIndex: 1,
      timer: ''
    }
  },
  methods: {
    isShow (val) {
      return val.endsWith(this.currentIndex) ? true : false
    },
    dialogRender () {

    },
    startTimer () {
      var that = this
      this.clearTimer()
      this.timer = setInterval(function(){
        that.currentIndex = ++that.currentIndex > 4 ? 1 : that.currentIndex
      }, 3000)
    },
    clearTimer () {
      this.timer && clearInterval(this.timer)
    },
    goTo (val) {
      val = +val > 4 ? 1 : val
      this.currentIndex = val
      this.startTimer()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./carousel.css" scoped></style>
