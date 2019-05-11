import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ListRooms from './views/ListRooms.vue';
import DetailsRoom from './views/DetailsRoom.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/rooms',
      name: 'ListRooms',
      component: ListRooms
    },
    {
      path: '/rooms/:id/show',
      name: 'ShowDetailsRoom',
      component: DetailsRoom
    }
  ],
});
