<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import { VideoService } from '../services/videoService';

@Component
export default class Dashboard extends Vue {
  @Prop() private videos!: object;
}

</script>
