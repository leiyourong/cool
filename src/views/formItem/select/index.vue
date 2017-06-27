<template>
  <div class="select">
    <div class="area-container">
      <div :class='[{"show": isShow}, "area"]' @click="getProvice()">{{ currentArea }}</div>
      <div class="select-container provice" v-if="isShow">
        <div class="select-item provice-item" :id="provice.id" v-for="provice in provices" @click="getCity(provice)">{{ provice.name }}</div>
        <div class="select-container city" v-if="citys.length">
          <div class="select-item city-item" :id="city.id" v-for="city in citys" @click="getCounty(city)">{{ city.name }}</div>
          <div class="select-container county" v-if="counties.length">
            <div class="select-item county-item" :id="county.id" v-for="county in counties" @click="selectCounty(county)">{{ county.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      currentArea: '选择地区',
      provices: [],
      citys: [],
      counties: []
    }
  },
  methods: {
    getProvice () {
      this.isShow = !this.isShow
      this.provices = [{
        id: 'none',
        name: '选择地区'
      }, {
        id: 'fj',
        name: '福建'
      }, {
        id: 'bj',
        name: '北京'
      }, {
        id: 'sh',
        name: '上海'
      }]
    },
    getCity (provice) {
      if (provice.id === 'fj') {
        this.citys = [{
          id: 'wxq',
          name: '外星球'
        }, {
          id: 'nd',
          name: '宁德'
        }]
      } else {
        this.isShow = false
        this.citys = []
        this.currentArea = provice.name
      }
    },
    getCounty (city) {
      if (city.id === 'nd') {
        this.counties = [{
          id: 'fd',
          name: '福鼎'
        }, {
          id: 'fa',
          name: '福安'
        }]
        return
      } else {
        this.isShow = false
        this.counties = []
        this.currentArea = city.name
      }
    },
    selectCounty (county) {
      this.isShow = false
      this.currentArea = county.name
    }
  }
}
</script>

<style src="./select.css" scoped></style>
