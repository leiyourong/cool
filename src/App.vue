<template>
  <div id="app">
    <div class="item-container">
      <div v-for="route in routes" v-if="route.hidden !== true" class="item" @click="loadItem(route.path)">
        {{ route.name }}
      </div>
    </div>
    <div class="line"></div>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import routes from './router/routes'

export default {
  name: 'app',
  data () {
    return {
      routes: routes
    }
  },
  methods: {
    loadItem (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style src="./css/app.css"></style>
