<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <app-drone v-for="i in $store.state.numberOfDrones" :key="i" :id="i" />
  </div>
</template>

<script>
  // appDrone - identify as an app component
  import AppDrone from './components/Drone.vue';

  export default {
    created() {
      console.log('app created step 1')
      this.$store.dispatch('init');
    },
    components: {
      AppDrone
    },
  }
</script>