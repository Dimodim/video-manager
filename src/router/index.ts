import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/search',
    name: 'SearchVideos',
    component: () => import('../views/SearchVideos.vue'),
  },
  {
    path: '/upload',
    name: 'UploadVideos',
    component: () => import('../views/UploadVideos.vue'),
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('../views/Analytics.vue'),
  },
  {
    path: '/video-details/:id',
    name: 'VideoDetails',
    component: () => import('../views/VideoDetails.vue'),
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
