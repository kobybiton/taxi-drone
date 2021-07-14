<template>
  <div class="hello">

  </div>
</template>

<script>
export default {
  name: 'Drone',
  props: {
    timeToLand: Number,
    passengerArrivalTime: Number,
    heightAllotment: Array
  },
  data () {
    return {
      isOnAir: Boolean,
      isOnLand: Boolean,
    }
  },
}
</script>