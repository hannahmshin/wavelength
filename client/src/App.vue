<template>
  <div id="app">
    <img alt="Wavelength Logo" src="./assets/logo.png" />
    <div class="cards">
      <Card v-bind:class="{ left: true }" v-bind:value="left" />
      <Spectrum v-bind:location="location" />
      <Card v-bind:class="{ right: true }" v-bind:value="right" />
    </div>

    <div class="nav">
      <button v-on:click="newGame">New Game</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Card from './components/Card.vue'
import Spectrum from './components/Spectrum.vue'
import api from './lib/api.js'

const state = {
  left: '',
  right: '',
  location: -1
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
    Spectrum
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

.cards {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
