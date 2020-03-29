<template>
  <div id="app">
    <img alt="Wavelength Logo" src="./assets/logo.png" />
    <div v-if="role != 'none'" class="cards">
      <Card v-bind:class="{ left: true }" v-bind:value="left" />
      <Spectrum v-bind:location="location" />
      <Card v-bind:class="{ right: true }" v-bind:value="right" />
    </div>

    <Menu v-bind:role="role" v-on:setRole="role = $event" v-on:newGame="newGame" v-on:reset="role = 'none'" />
  </div>
</template>

<script>
import Vue from 'vue'
import Card from './components/Card.vue'
import Spectrum from './components/Spectrum.vue'
import Menu from './components/Menu.vue'
import api from './lib/api.js'

const state = {
  left: '',
  right: '',
  location: -1,
  role: 'none'
}

function setData({ left, right, location }) {
  Vue.set(this, 'location', location)
  Vue.set(this, 'left', left)
  Vue.set(this, 'right', right)
}

export default {
  name: 'app',
  components: {
    Card,
    Spectrum,
    Menu
  },
  data: () => {
    return state
  },
  methods: {
    newGame: () =>
      api
        .newGame()
        .then(() => api.getSpectrum())
        .then(data => setData.call(state, data))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
