import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Import notification module
import {notification} from './modules/notification';

export default new Vuex.Store({
  modules: {
    notification
  }
});