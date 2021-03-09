<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">Real World Events</nuxt-link>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'UploadVideos' }">Upload Video</router-link> |
      <router-link :to="{ name: 'SearchVideos' }">Search Videos</router-link> |
      <router-link :to="{ name: 'Analytics' }">Analytics</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class NavBar extends Vue {}
</script>
<style scoped>
.brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
}
</style>
