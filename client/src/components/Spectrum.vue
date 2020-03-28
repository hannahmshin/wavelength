<template>
  <div class="slider">
    <input
      type="range"
      min="1"
      max="1000"
      v-bind:value="this.location"
      class="slider"
      id="myRange"
    />
  </div>
</template>

<script>
export default {
  name: 'Word',
  props: {
    location: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

div {
  flex-direction: row;
}

/* .left {
  text-align: left
}

.right {
  text-align: right
} */
</style>
