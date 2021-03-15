<template>
  <div>
    <h1 :v-if="video">{{video.name}}</h1>
    <video :src="'../../../../vue-video-manager-master/public' + video.url" controls></video>
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
  }

  get video() {
    return this.$store.getters.getVideoById;
  }
}

</script>
