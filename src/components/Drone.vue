<template>
  <div class="hello">
    <h1>{{ isOnAir }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Drone',
  props: {
    timeToLand: Number,
    passengerArrivalTime: Number
  },
  data () {
    return {
      isOnAir: Boolean,
      isOnLand: Boolean,
    }
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
</style>
