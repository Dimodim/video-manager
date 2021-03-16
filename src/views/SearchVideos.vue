<template>
    <div>
        <h1>Search Videos</h1>
        <SearchForm  v-on:clicked="getVideosByTitle"></SearchForm>
      <div v-for="video in videos" :key="video.title">
        <h3 id="video-title">{{video.name}}</h3>
      </div>
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
export default class SearchVideos extends Vue {
  mounted() {
    this.$store.dispatch('fetchVideos');
  }

  getVideosByTitle(title: string) {
    this.$store.dispatch('setSearchField', title);
  }

  get searchField() {
    return this.$store.getters.getSearchField;
  }

  get videos() {
    return this.$store.getters.getVideos;
  }

  beforeDestroy() {
    this.$store.dispatch('clearSearchField');
  }
}
</script>

<style>

</style>
