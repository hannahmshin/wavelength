<template>
  <div id="app">
    <img alt="Wavelength Logo" src="./assets/logo.png" />
    <WordPair left="Bad" />
    <WordPair right="Good" />
  </div>
</template>

<script>
import WordPair from './components/WordPair.vue'

export default {
  name: 'app',
  components: {
    WordPair
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
