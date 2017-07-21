<template>
  <div class="dialog-container" v-if="isShow">
    <div class="dialog-main">
      <div class="dialog-header">
        <div class="dialog-close" @click="closeDialog">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%">
            <path d="M2 0 l11 11 m-11 0 l11 -11" fill="none" stroke="black" />
          </svg>
        </div>
      </div>
      <div class="dialog-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialog',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    closeDialog () {
      this.$emit('close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./styles/dialog.css" scoped></style>
