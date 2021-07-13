import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); // tell Vue to action with Vuex

export default new Vuex.Store({
    state: { // define here data that you wish to store
        test: 'test',
    },
    mutations: { // change state from here

    },
    actions: { // call mutations that change the state here

    }
});