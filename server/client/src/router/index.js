import Vue from 'vue';
import VueRouter from 'vue-router';
import Items from '../views/Items.vue';
import ItemDetail from '../views/ItemDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Items',
    component: Items,
  },
  {
    path: '/itemdetail/:id/:title',
    name: 'ItemDetail',
    component: ItemDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
