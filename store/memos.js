export const state = () => ({
  memos: []
});

export const mutations = {
  add(state, item) {
    state.memos.push(item);
  }
}
export const getters = {
  writtenmemos: state => {
    return state.memos
  }
}
