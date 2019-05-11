<template>
  <div>
    Sala: {{ details.name }}
    <HelloWorld>
      <h3 slot="test">TEST 2</h3>
      <h2>TEST 1</h2>
    </HelloWorld>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'DetailsRoom',
  data () {
    return {
      details: {}
    }
  },
  created () {
    this.details = this.getDetailsRoom(this.$router.currentRoute.params.id);
  },
  computed: {
    ...mapGetters('Rooms', [
      'getDetailsRoom'
    ])
  },
  components: {
    HelloWorld
  }
}
</script>

