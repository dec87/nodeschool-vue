<template>
  <div>
    <H1>Lista sal</H1>
    <ol>
      <li v-for="room in listRoomsTest" :key="room.id">
        <router-link :to="{ name: 'ShowDetailsRoom', params: { id: room.id } }">{{ room.name }}</router-link>
      </li>
    </ol>
    <form v-on:submit.prevent>
      <input v-model="roomName" type="text"/>
      <button v-on:click="addRoom">ADD</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ListRooms',
  data() {
    return {
      roomName: ''
    }
  },
  methods: {
    addRoom () {
      this.add(this.roomName);
    },
    ...mapActions('Rooms', [
      'add'
    ])
  },
  computed: {
    ...mapState('Rooms', {
      listRoomsTest: 'listRooms'
    })
  }
}
</script>

