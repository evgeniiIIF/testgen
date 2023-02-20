import { createStore } from "vuex";

export default createStore({
  state: {
    loading: false,
  },
  getters: {
    loading(state) {
      return state.loading;
    },
  },
  mutations: {
    startLoading(state) {
      state.loading = true;
    },
    endLoading(state) {
      state.loading = false;
    },
  },
  actions: {
    aCreateEntity(store) {
      store.commit("startLoading");
      setTimeout(() => store.commit("endLoading"), 1000);
    },
  },
});
