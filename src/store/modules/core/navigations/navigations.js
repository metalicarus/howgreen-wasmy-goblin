import { NAVIGATION_GOTO } from '@/store/modules/ActionNamesEnum';
import router from '@/router';

export default {
  use: () => ({
    state: {},
    mutations: { },
    actions: {
      // eslint-disable-next-line no-empty-pattern
      async [NAVIGATION_GOTO]({}, payload = { goto: undefined }) {
        await router.push({ name: payload.goto });
      },
    },
    getters: { },
    namespaced: true,
  }),
};
