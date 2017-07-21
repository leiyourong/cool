<template>
  <div class="image">
    <input type="button" name="carousel" value="轮播图" @click="dialogRender" />
    <input type="button" name="scratch" value="刮奖" @click="dialogRender" />
    <c-dialog :isShow="dialogShow" @close="closeDialog()">
      <c-carousel v-if="module === 'carousel'"></c-carousel>
      <c-scratch v-if="module === 'scratch'"></c-scratch>
    </c-dialog>
  </div>
</template>

<script>
import CDialog from '@/components/dialog.vue'
import CCarousel from './carousel/index.vue'
import CScratch from './scratch/index.vue'

export default {
  name: 'carousel',
  data () {
    return {
      dialogShow: false,
      module: ''
    }
  },
  methods: {
    dialogRender (e) {
      this.dialogShow = true
      this.module = e.target.name
    },
    closeDialog () {
      this.dialogShow = false
    }
  },
  components: {
    CDialog,
    CCarousel,
    CScratch
  }
}
</script>
