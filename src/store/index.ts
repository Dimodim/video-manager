import Vue from 'vue';
import Vuex from 'vuex';
import VideoService from '../services/videoService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    video: null,
    videos: [],
    videosWithAnalytics: [],
    views: 0,
    selectedVideoId: -1,
    searchField: null,
    error: null,
  },
  mutations: {
    ADD_VIDEO(state, video) {
      state.video = video;
    },
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    },
    SET_VIDEOS_WITH_ANALYTICS(state, videosWithAnalytics) {
      state.videosWithAnalytics = videosWithAnalytics;
    },
    SET_VIEWS(state, views) {
      state.views = views;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_SELECTED_ID(state, id) {
      state.selectedVideoId = id;
    },
    SET_SEARCH_FIELD_VALUE(state, fieldValue) {
      state.searchField = fieldValue;
    },
    CLEAR_SEARCH_FIELD_VALUE(state) {
      state.searchField = null;
    },
    CLEAR_VIEWS(state) {
      state.views = 0
    },
  },
  actions: {
    fetchVideosByTitle({ commit }, title) {
      return VideoService.getVideosByTitle(title)
        .then((r: any) => {
          // console.log(r);
          commit('SET_VIDEOS', r.data);
        }).catch((err) => {
          commit('SET_ERROR', err.message);
          throw err;
        });
    },
    fetchVideos({ commit }) {
      return VideoService.getVideos()
        .then((r: any) => {
          commit('SET_VIDEOS', r.data);
        }).catch((err) => {
          commit('SET_ERROR', err.message);
          throw err;
        });
    },
    fetchVideosWithAnalytics({ commit }) {
      return VideoService.getVideosWithViews()
        .then((r: any) => {
          commit('SET_VIDEOS_WITH_ANALYTICS', r.data);
        }).catch((err) => {
          commit('SET_ERROR', err.message);
          throw err;
        });
    },
    setVideoViews({ commit }, id) {
      return VideoService.getVideoViews(id)
        .then((r: any) => {
          if (r.data.views) {
            commit('SET_VIEWS', r.data.views);
          }
        })
        .catch((err) => {
          commit('SET_ERROR', err.message);
          throw err;
        });
    },
    updateVideoViews({ commit }, video) {
      return VideoService.putVideo({ id: video.id, views: video.views + 1 })
        .then((r: any) => {
          console.log(r.data);
          commit('SET_VIEWS', r.data.views);
        })
        .catch((err) => {
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
    setSearchField({ commit }, value) {
      commit('SET_SEARCH_FIELD_VALUE', value);
    },
    clearSearchField({ commit }) {
      commit('CLEAR_SEARCH_FIELD_VALUE');
    },
    clearViews({ commit }) {
      commit('CLEAR_VIEWS');
    },
  },
  getters: {
    getVideos: (state) => state.videos,
    getVideo: (state) => state.video,
    getNewestVideos: (state) => state.videos.sort((a, b) => a - b).slice(0, 3),
    getVideoById: (state) => state.videos.find((v: any) => v.id === +state.selectedVideoId),
    getSearchField: (state) => state.searchField,
    getViews: (state) => state.views,
    getAnalytics: (state) => state.videosWithAnalytics,
  },
});
