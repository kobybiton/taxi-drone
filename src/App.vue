<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <Drone/>
  </div>
</template>

<script>

  import Drone from './components/Drone.vue'
  //import { TOTAL_SIMULATION_TIME } from './constants'
  import { AVG_PASSENGER_ARRIVAL_TIME } from './constants'
  //import CentralControl from './services/centralControlSystemService';

  export default {
    name: 'App',
    components: {
      Drone
    },
    data() {
      return {
        currentTime: 0
      }
    },
    mounted() {
/*      setInterval(() => {
        if(this.currentTime !== TOTAL_SIMULATION_TIME) {
          this.currentTime++
        } else {
          return;
        }
        console.log(this.currentTime);
      }, 100);*/
    console.log(AVG_PASSENGER_ARRIVAL_TIME)
    },
  }
</script>