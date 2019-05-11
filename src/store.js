import Vue from 'vue';
import Vuex from 'vuex';
import Rooms from './store/Rooms.js';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    Rooms
  }
});
