import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/auth";
import assets from "@/store/assets";
import deals from "@/store/deals";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  getters: {
    error: (s) => s.error,
  },
  actions: {},
  modules: {
    auth,
    assets,
    deals,
  },
});
