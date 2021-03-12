import Vue from 'vue';
import Vuex from 'vuex';
import VideoService from '../services/videoService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    video: null,
    videos: [],
    error: null,

  },
  mutations: {
    ADD_VIDEO(state, video) {
      state.video = video;
    },
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    },
    SER_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    fetchVideos({ commit }) {
      return VideoService.getVideos()
        .then((r: any) => {
          commit('SET_VIDEOS', r.data);
        }).catch((err) => {
          commit('SER_ERROR', err.message);
          throw err;
        });
    },
    uploadVideo({ commit }, video) {
      return VideoService.uploadVideo(video)
        .then((r: any) => {
          commit('ADD_VIDEO', r.data);
        }).catch((err) => {
          commit('SER_ERROR', err.message);
          throw err;
        });
    },
  },
  getters: {
    getVideos: (state) => state.videos,
    getVideo: (state) => state.video,
  },
});
