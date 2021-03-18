<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SearchForm  v-on:clicked="routeToSearchVideos"></SearchForm>
    <ul v-for="video in videos" :key="video.id" class="video">
          <h3 @click="routeToVideoDetails(video)"  id="video-title">{{video.name}}</h3>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchForm from '../components/SearchForm.vue';

@Component({
  components: {
    SearchForm,
  },
})
export default class Dashboard extends Vue {
  mounted() {
    this.$store.dispatch('fetchVideos');
    this.$store.dispatch('fetchVideosWithAnalytics');
  }

  routeToSearchVideos = (title: string) => {
    this.$store.dispatch('setSearchField', title);
    this.$router.push({ path: '/search' });
  };

  routeToVideoDetails = (video: any) => {
    this.$router.push({ path: `/video-details/${video.id}`, params: { id: video.id } });
  };

  get videos() {
    return this.$store.getters.getNewestVideos;
  };
}
</script>
<style scoped>
.video {
  display: inline-blok;
}
</style>
