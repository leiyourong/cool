<template>
  <div class="calendar">
    <input class="calendar-input" type="text" readOnly @click="showCalendar" :value="date">
    <span>（日历）</span>
    <div class="calendar-main" v-if="isShow">
      <div class="year-month">
        <div class="year">
          <div class="before" @click="goSibing('year', 'before')">&lt;</div>
          {{ currentYear }}
          <div class="after" @click="goSibing('year', 'after')">&gt;</div>
        </div>
        <div class="month">
          <div class="before" @click="goSibing('month', 'before')">&lt;</div>
          {{ currentMonth }}
          <div class="after" @click="goSibing('month', 'after')">&gt;</div>
        </div>
      </div>

      <div class="week flex">
        <div v-for="i in 7" class="flex-item week-item">{{ weeks[i-1] }}</div>
      </div>
      <div class="line"></div>
      <div class="day">
        <div v-for="last in lastMonthDayArr" class="show-only day-item">{{ last }}</div>
        <div v-for="current in dayArr" :class="[{selected: current === currentDay}, 'day-item']" @click="selectDay(current)">{{ current }}</div>
        <div v-for="next in nextMonthDayArr" class="show-only day-item">{{ next }}</div>
      </div>
      <div class="operator">
        <div class="bt" @click="cleanDay">清空</div>
        <input ref="yearMonth" type="text" placeholder="输入要跳转的年月yyyy-mm" />
        <div class="bt" @click="goTo">跳转</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      isShow: false,
      currentYear: '',
      currentMonth: '',
      currentDay: '',
      lastMonthDayArr: [],
      dayArr: [],
      nextMonthDayArr: [],
      date: ''
    }
  },
  created () {
    var date = new Date()
    this.currentYear = date.getFullYear()
    this.currentMonth = date.getMonth() + 1
    this.getDayArr()
  },
  methods: {
    showCalendar () {
      this.isShow = !this.isShow
    },
    goSibing (d, t) {
      if (d === 'year' && t === 'before') {
        this.currentYear--
      } else if (d === 'year' && t === 'after') {
        this.currentYear++
      } else if (d === 'month' && t === 'before') {
        this.currentMonth--
        if (this.currentMonth <= 0) {
          this.currentMonth = 12
          this.currentYear--
        }
      } else if (d === 'month' && t === 'after') {
        this.currentMonth++
        if (this.currentMonth > 12) {
          this.currentMonth = 1
          this.currentYear++
        }
      }
      this.getDayArr()
    },
    selectDay (value) {
      this.currentDay = value
      this.date = this.currentYear + '-' + (this.currentMonth >= 10 ? this.currentMonth : '0' + this.currentMonth) + '-' + (this.currentDay >= 10 ? this.currentDay : '0' + this.currentDay)
    },
    getDayArr () {
      this.lastMonthDayArr = []
      this.dayArr = []
      this.nextMonthDayArr = []
      var year = this.currentYear
      var month = this.currentMonth
      this.dayArr = []
      var day = this.getDay(year, month)
      for (var i=1; i<=day; i++) {
        this.dayArr.push(i)
      }
      var firDay = year + '-' + month + '-1'
      var endDay = year + '-' + month + '-' + day
      var firDayWeek = new Date(firDay).getDay()
      var endDayWeek = new Date(endDay).getDay()
      if (firDayWeek !== 0) {
        var lastMonth = month - 1
        var lastMonthDay = 0
        if (lastMonth <= 0) {
          lastMonthDay = this.getDay(year-1, 12)
        } else {
          lastMonthDay = this.getDay(year, lastMonth)
        }
        for (var i=firDayWeek-1; i>=0; i--, lastMonthDay--) {
          this.lastMonthDayArr.unshift(lastMonthDay)
        }
      }
      if (endDayWeek !== 6) {
        var nextMonthDay = 1
        for (var i=endDayWeek+1; i<=6; i++, nextMonthDay++) {
          this.nextMonthDayArr.push(nextMonthDay)
        }
      }
    },
    getDay (year, month) {
      var big = [1,3,5,7,8,10,12]
      if (big.indexOf(month) !== -1) {
        return 31
      } else if (month === 2) {
        if (year % 400 === 0 || (year % 100 !==0 && year % 4 === 0)) {
          return 29
        }
        return 28
      }
      return 30
    },
    cleanDay () {
      this.date = ''
      this.currentDay = ''
    },
    goTo () {
      var value =this.$refs['yearMonth'].value
      if (!value) {
        alert('日期不能用为空')
        return
      }
      var req = /[0-9]{4}-((1[1|2])|(0?[1-9]))/
      if (!req.test(value)) {
        alert('日期格式错误')
        return
      }
      var values = value.split('-')
      this.currentYear = values[0]
      this.currentMonth = values[1]
      this.getDayArr()
    }
  }
}
</script>

<style src="./calendar.css" scoped></style>
