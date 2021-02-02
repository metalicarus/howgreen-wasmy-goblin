import Vue from 'vue';
import VueRouter from 'vue-router';
import { STORE_CORE_AUTH_MODULE } from '@/store/StoreNamesEnum';
import { AUTH_REFRESH_TOKEN } from '@/store/modules/ActionNamesEnum';
import Store from 'vuex';
import Home from '../views/Home.vue';

Vue.use(Store);
Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue'),
  },
  {
    path: '/',
    name: 'Home',
    meta: { auth: true },
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (to.name !== 'Login') {
      const result = router.app.$store.dispatch(`${STORE_CORE_AUTH_MODULE}/auth/${AUTH_REFRESH_TOKEN}`);
      result.then((response) => {
        if (!response) {
          console.log('router');
          router.push({ name: 'Login' });
        }
      });
    }
  }
  next();
});
export default router;
