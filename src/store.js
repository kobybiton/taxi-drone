import Vue from "vue";
import Vuex from "vuex";
import { TOTAL_SIMULATION_TIME, NUMBER_OF_ALTITUDES, NUMBER_OF_DRONES } from './constants';

Vue.use(Vuex); // tell Vue to action with Vuex

// central control system service
export default new Vuex.Store({
    state: { // general app stats
        ticker: 0,
        tickerInterval: null,
        altitudes: [],
        numberOfDrones: 0
    },
    mutations: { // change state from here
        updateTicker(state) {
            state.ticker++;
            if (state.ticker >= TOTAL_SIMULATION_TIME && state.tickerInterval) {
                clearInterval(state.tickerInterval); // end simulation
            }
        }
    },
    actions: { // call mutations that change the state
        init({ state, commit }) { // initializing general app stats
            state.tickerInterval = setInterval(() => commit('updateTicker'), 60000);
            for (let i = 0; i < NUMBER_OF_ALTITUDES; i++) {
                state.altitudes.push(true);
            }
            state.numberOfDrones = NUMBER_OF_DRONES;
        },
        reserveAltitude({ state }) {
            for (let i = 0; i < NUMBER_OF_ALTITUDES; i++) {
                if (state.altitudes[i]) {
                    state.altitudes[i] = false;
                    return i + 1;
                }
            }

            return false;
        },
        clearAltitude({ state }, { altitude }) {
            state.altitudes[altitude - 1] = true;
        }
    }
});