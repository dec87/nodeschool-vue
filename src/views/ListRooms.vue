<template>
  <div>
    <H1>Lista sal</H1>
    <ol>
      <li v-for="(room, key) in listRoomsTest" :key="key" >
        {{ room.name }}
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

