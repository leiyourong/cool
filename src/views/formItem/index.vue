<template>
  <div class="form">
    <r-select class="item"></r-select>
    <r-calendar class="item"></r-calendar>
  </div>
</template>

<script>
import RSelect from './select/index'
import RCalendar from './calendar/index'
export default {
  data () {
    return {
    }
  },
  components: {
    RSelect,
    RCalendar
  }
}
</script>

<style>
  .item {
    margin: 10px 0;
  }
</style>
