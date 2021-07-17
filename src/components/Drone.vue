<template>
    <div></div>
</template>

<script>
    import { PASSENGER_ARRIVAL_TIME_MAX, PASSENGER_ARRIVAL_TIME_MIN, FLIGHT_DISTANCE_MIN, FLIGHT_DISTANCE_MAX, AVG_DRONE_SPEED } from "../constants";
    export default {
        data: () => ({
            isInAir: false,
            timeToLand: null,
            passengerArrivalTime: null,
            altitude: null
        }),
        props: {
            id: Number
        },
        watch: {
            "$store.state.ticker"(val, old) {
                // ticker changed
                this.onUpdate(val - old);
            }
        },
        methods: {
            onUpdate(interval) {
                if (this.passengerArrivalTime > 0) {
                    this.passengerArrivalTime -= interval;
                    if (this.passengerArrivalTime === 0) {
                        console.log(`${new Date().toLocaleTimeString()}: person arrived at drone ${this.id}`);
                    }
                }

                if (this.timeToLand > 0) {
                    this.timeToLand -= interval;
                }

                if (this.isInAir) {
                    if (this.timeToLand === 0) {
                        // landing time
                        this.onLanding();
                        console.log(`${new Date().toLocaleTimeString()}: drone ${this.id} landed`);
                    }
                } else {
                    if (this.passengerArrivalTime === 0) {
                        // try departing
                        this.prepareForDeparture();
                    }
                }
            },
            onLanding() {
                this.timeToLand = null;
                this.passengerArrivalTime = null;
                this.isInAir = false;

                // checking drone altitude
                if (this.altitude !== null) {
                    // update central control altitudes array
                    this.$store.dispatch('clearAltitude', { altitude: this.altitude });
                    // update drone altitude
                    this.altitude = null;
                }

                this.waitForPassenger();
            },
            waitForPassenger() {
                this.passengerArrivalTime = Math.floor(Math.random() * PASSENGER_ARRIVAL_TIME_MAX) + PASSENGER_ARRIVAL_TIME_MIN;
            },
            prepareForDeparture() {
                this.$store.dispatch('reserveAltitude').then(altitude => {
                    let msg = `${new Date().toLocaleTimeString()}: drone ${this.id} requested permission to depart`;
                    if (altitude) {
                        console.log(`${msg} and permission granted - ${altitude}`);
                        this.departure(altitude);
                    } else {
                        console.log(`${msg} and permission denied`);
                    }
                });
            },
            departure(altitude) {
                // updating drone stats
                this.isInAir = true;
                this.altitude = altitude;
                let distance = (Math.floor(Math.random() * FLIGHT_DISTANCE_MAX) + FLIGHT_DISTANCE_MIN);
                this.timeToLand = Math.round(60 * distance / AVG_DRONE_SPEED);
            }
        },
        created() {
            this.onLanding();
        }
    }
</script>