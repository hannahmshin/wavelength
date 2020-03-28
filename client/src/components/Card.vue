<template>
  <div>
    <p>{{ this.value }}</p>
  </div>
</template>

<script>
export default {
  name: 'Word',
  props: {
    value: String,
    top: Boolean,
    bottom: Boolean
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

/* .top {
  text-align: left
}

.bottom {
  text-align: right
} */
</style>
