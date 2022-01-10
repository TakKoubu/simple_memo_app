export const state = () => ({
  memos: []
});

export const mutations = {
  add(state, item) {
    state.memos.push(item);
  },
  remove(state,index) {
    state.memos.splice(index,1)
    console.log(index)
  }
}

export const getters = {
  writtenmemos: state => {
    return state.memos
  }
}
