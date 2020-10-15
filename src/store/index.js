import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navBarDisplay: false
    },
    mutations: {
        navBarToggle(state) {
            state.navBarDisplay = !state.navBarDisplay;
            console.log(state.navBarDisplay)
        },
        navBarHide(state) {
            state.navBarDisplay = false;
        }
    },
    actions: {},
    modules: {}
});