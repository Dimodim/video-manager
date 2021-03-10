<template>
    <div>
        <h1>Search Videos</h1>

      <div v-for="video in videos" :key="video.title">
        <h3 id="video-title">{{video.title}}</h3>
        <p id="video-description">{{video.title}}</p>
        <img id="thumbnail" :src="video.thumbnail">
      </div>
    </div>
</template>

<script lang="ts">
import { IVideo } from '@/Interfaces/IVideo';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SearchVideos extends Vue {
  get videos(): Array<IVideo> {
    return this.$store.state.videos;
  }
}
</script>

<style>

</style>
