export default {
  namespaced: true,
  state: {
    listRooms: [
      { id: 1, name: 'Pierwsza sala'},
      { id: 2, name: 'Druga sala'}
    ]
  },
  getters: {
    getDetailsRoom: ({ listRooms }) => (idRoom) => {
      return listRooms.find((room) => room.id === parseInt(idRoom));
    }
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