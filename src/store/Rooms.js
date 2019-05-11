export default {
  namespaced: true,
  state: {
    listRooms: [
      { id: 1, name: 'Poerwsza sala'},
      { id: 2, name: 'Druga sala'}
    ]
  },
  mutations: {
    ADD_ROOM (state, roomName) {
      state.listRooms.push({
        name: roomName,
        id: new Date().getTime()
      });
    }
  },
  actions: {
    add ({ commit }, roomName) {
      commit('ADD_ROOM', roomName);
    }
  }
}