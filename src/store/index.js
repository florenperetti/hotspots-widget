import Vue from 'vue';
import Vuex from 'vuex';
import markers from './modules/markers';
import widget from './modules/widget';

if (!window.Promise) {
  require('es6-promise').polyfill(); // eslint-disable-line global-require
}

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'development', // eslint-disable-line
  modules: {
    markers,
    widget,
  },
});
export default store;
