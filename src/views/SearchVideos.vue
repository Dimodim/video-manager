<template>
    <div>
        <h1>Search Videos</h1>

      <!--<div v-for="video in videos" :key="video.title">
        <h3 id="video-title">{{video.title}}</h3>
        <p id="video-description">{{video.title}}</p>
        <img id="thumbnail" :src="video.thumbnail">
      </div>-->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SearchVideos extends Vue {
  videos!: [];

  mounted() {
    this.$store.dispatch('fetchVideos');
  }
}
</script>

<style>

</style>
