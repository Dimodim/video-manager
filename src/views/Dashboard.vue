<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  computed: {
  },
})
export default class Dashboard extends Vue {
  mounted() {
    this.$store.dispatch('fetchVideos');
  }
}
</script>
