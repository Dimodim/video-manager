import Vue from 'vue';
import Vuex from 'vuex';
import VideoService from '../services/videoService';
// import { IVideo } from '../Interfaces/IVideo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    video: null,
    videos: null,
  },
  mutations: {
    ADD_VIDEO(state, video) {
      state.video = video;
    },
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    },
  },
  actions: {
    fetchVideos({ commit }) {
      return VideoService.getVideos()
        .then((r: any) => {
          commit('SET_VIDEOS', r.data);
        });
    },
    uploadVideos({ commit }, video) {
      return VideoService.uploadVideo(video)
        .then((r: any) => {
          commit('ADD_VIDEO', r.data);
        });
    },
  },
});
