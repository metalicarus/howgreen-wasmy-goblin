import Vue from 'vue';
import VueRouter from 'vue-router';
import { STORE_CORE_AUTH_MODULE } from '@/store/StoreNamesEnum';
import { AUTH_REFRESH_TOKEN } from '@/store/modules/ActionNamesEnum';
import Store from 'vuex';
import Home from '../views/Home';

Vue.use(Store);
Vue.use(VueRouter);

function withPrefix(routeGroup, prefix) {
  return routeGroup.map((curr) => {
    curr.path = `/${prefix}${curr.path}`;
    return curr;
  });
}
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login'),
  },
  {
    path: '/',
    name: 'Home',
    meta: { auth: true },
    component: Home,
  },
  {
    path: '/movies',
    name: '#Movies',
    meta: { auth: true },
    component: () => import('../views/movies/MoviesList'),
  },
  ...withPrefix([
    {
      path: '/categories',
      name: '#RequirementsCategoriesList',
      meta: { auth: true },
      component: () => import('../views/categories/CategoriesList'),
    },
    {
      path: '/genres',
      name: '#RequirementsGenresList',
      meta: { auth: true },
      component: () => import('../views/genres/GenresList'),
    },
  ], 'requirements'),

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
        if (!response) router.push({ name: 'Login' });
      });
    }
  }
  next();
});
export default router;
