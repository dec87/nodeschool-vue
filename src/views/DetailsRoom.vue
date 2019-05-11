<template>
  <div>
    Sala: {{ details }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
  }
}
</script>

