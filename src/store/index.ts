import Vue from 'vue';
import Vuex from 'vuex';
import VideoService from '../services/videoService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    video: null,
    videos: [],
    error: null,
    selectedVideoId: -1,

  },
  mutations: {
    ADD_VIDEO(state, video) {
      state.video = video;
    },
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_SELECTED_ID(state, id) {
      state.selectedVideoId = id;
    },
  },
  actions: {
    fetchVideos({ commit }) {
      return VideoService.getVideos()
        .then((r: any) => {
          console.log(r);
          commit('SET_VIDEOS', r.data);
        }).catch((err) => {
          commit('SET_ERROR', err.message);
          throw err;
        });
    },
    uploadVideo({ commit }, video) {
      return VideoService.uploadVideo(video)
        .then((r: any) => {
          commit('ADD_VIDEO', r.data);
        }).catch((err) => {
          commit('SET_ERROR', err.message);
          throw err;
        });
    },
    setDetailsVideoId({ commit }, id) {
      commit('SET_SELECTED_ID', id);
    },
  },
  getters: {
    getVideos: (state) => state.videos,
    getVideo: (state) => state.video,
    getNewestVideos: (state) => state.videos.sort((a, b) => a - b).slice(0, 3),
    getVideoById: (state) => state.videos.find((v: any) => v.id === +state.selectedVideoId),
  },
});
