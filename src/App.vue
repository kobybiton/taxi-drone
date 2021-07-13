<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Drone/>
  </div>
</template>

<script>
  import Drone from './components/Drone.vue'

  export default {
    name: 'App',
    components: {
      Drone
    },
    mounted() {
      alert(this.$store.state.test)
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
