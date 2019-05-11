export default {
  namespaced: true,
  state: {
    listRooms: [
      { name: 'Poerwsza sala'},
      { name: 'Druga sala'}
    ]
  },
  mutations: {
    ADD_ROOM (state, roomName) {
      state.listRooms.push({
        name: roomName
      });
    }
  },
  actions: {
    add ({ commit }, roomName) {
      commit('ADD_ROOM', roomName);
    }
  }
}