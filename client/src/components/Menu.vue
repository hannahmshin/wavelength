<template>
  <div class="menu">
    <div v-if="role == 'none'" class="role-select">
      <button v-on:click="$emit('setRole', 'psychic')">Psychic</button>
      <button v-on:click="$emit('setRole', 'player')">Player</button>
    </div>
    <div v-else class="role-menu">
      <button v-if="role == 'psychic'" v-on:click="$emit('newGame')">New Game</button>
      <button v-if="role == 'player'">Submit</button>
      <button v-on:click="$emit('reset')">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['role']
}
</script>
