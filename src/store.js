import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Rooms from './store/Rooms.js';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    Rooms
  },
  plugins: [
    createPersistedState({
      key: 'nodeschool',
      storage: window.sessionStorage
    })
  ]
});
