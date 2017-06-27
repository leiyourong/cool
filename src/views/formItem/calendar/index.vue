<template>
  <div class="calendar">
    <input class="calendar-input" type="text" readOnly @click="showCalendar">
    <span>（日历）</span>
    <div class="calendar-main" v-if="isShow">123123</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    showCalendar () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style src="./calendar.css" scoped></style>
