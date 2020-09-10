import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/words',
    name: 'Words',
    component: () => import('../views/Words/Index.vue'),
  },
  {
    path: '/words/new',
    name: 'New',
    component: () => import('../views/Words/New.vue'),
  },
  {
    path: '/words/:id/edit',
    name: 'Edit',
    component: () => import('../views/Words/New.vue'),
  },
  {
    path: '/words/:id',
    name: 'Show',
    component: () => import('../views/Words/Show.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
