<template>
  <div class="calendar">
    <input class="calendar-input" type="text" readOnly @click="showCalendar">
    <span>（日历）</span>
    <div class="calendar-main" v-if="isShow">
      <div class="year-month">
        <div class="year">{{ currentYear }}</div>
        <div class="month">{{ cuurentMonth }}</div>
      </div>

      <div class="week flex">
        <div v-for="i in 7" class="flex-item week-item">{{ weeks[i-1] }}</div>
      </div>
      <div class="line"></div>
      <div class="flex day">
        <div v-for="i in 31" class="flex-item day-item">{{ i }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    month = month < 10 ? '0' + month : month
    return {
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      isShow: false,
      currentYear: year,
      cuurentMonth: month
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
