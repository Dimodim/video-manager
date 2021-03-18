<template>
  <div>
    <h1 :v-if="video">{{video.name}}</h1>
    <video :src="'../../../../vue-video-manager-master/public' + video.url" controls></video>
    <h3>Views: {{views}}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
})
export default class VideoDetails extends Vue {
  @Prop() id!: number;

  mounted() {
    this.$store.dispatch('setDetailsVideoId', this.id);
    this.$store.dispatch('setVideoViews', this.id);
  }

  get video() {
    return this.$store.getters.getVideoById;
  }

  get views() {
    return this.$store.getters.getViews;
  }

  beforeDestroy() {
    this.$store.dispatch('updateVideoViews', { id: this.video.id, views: this.views })
    this.$store.dispatch('clearViews');
  }
}

</script>
