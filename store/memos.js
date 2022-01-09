import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    namespace: true,
    state: {
      memos: []
    },
    mutations: {
      add(state, item) {
        state.memos.push(item);
      }
    },
  });
};

export default createStore;
