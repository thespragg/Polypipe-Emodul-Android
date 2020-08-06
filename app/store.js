import Vue from "nativescript-vue"
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    authenticated: false
  },
  mutations: {
    setAuthenticated(state,value){state.authenticated = value}
  },
  getters: {
    authenticated: state => state.authenticated
  }
});
