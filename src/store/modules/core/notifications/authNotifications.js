import {
  SET_NOTIFICATIONS_AUTHORIZED,
  SET_NOTIFICATIONS_UNAUTHORIZED, UNSET_NOTIFICATIONS_AUTHORIZED, UNSET_NOTIFICATIONS_UNAUTHORIZED,
} from '@/store/modules/ActionNamesEnum';

export default {
  use: () => ({
    state: {
      unauthorized: { title: undefined, message: undefined, show: false },
      authorized: { title: undefined, message: undefined, show: false },
    },
    mutations: {
      [SET_NOTIFICATIONS_UNAUTHORIZED](state, notification) {
        state.unauthorized.title = notification.title;
        state.unauthorized.message = notification.message;
        state.unauthorized.show = true;
      },
      [SET_NOTIFICATIONS_AUTHORIZED](state, notification) {
        state.authorized.title = notification.title;
        state.authorized.message = notification.message;
        state.authorized.show = true;
      },
      [UNSET_NOTIFICATIONS_AUTHORIZED](state) {
        state.authorized.title = undefined;
        state.authorized.message = undefined;
        state.authorized.show = false;
      },
      [UNSET_NOTIFICATIONS_UNAUTHORIZED](state) {
        state.unauthorized.title = undefined;
        state.unauthorized.message = undefined;
        state.unauthorized.show = false;
      },
    },
    actions: {
      async [SET_NOTIFICATIONS_AUTHORIZED]({ commit }, payload = { username: undefined }) {
        const notification = { title: 'Olá!', message: `Seja bem-vindo(a) ${payload.username}` };
        commit(SET_NOTIFICATIONS_AUTHORIZED, notification);
      },
      async [UNSET_NOTIFICATIONS_AUTHORIZED]({ commit }) {
        setTimeout(() => {
          commit(UNSET_NOTIFICATIONS_AUTHORIZED);
        }, 8000);
      },
      async [SET_NOTIFICATIONS_UNAUTHORIZED]({ commit }) {
        const notification = { title: '...Ops!', message: 'Credenciais inválidas' };
        commit(SET_NOTIFICATIONS_UNAUTHORIZED, notification);
      },
      async [UNSET_NOTIFICATIONS_UNAUTHORIZED]({ commit }) {
        setTimeout(() => {
          commit(UNSET_NOTIFICATIONS_UNAUTHORIZED);
        }, 8000);
      },
    },
    getters: { },
    namespaced: true,
  }),
};
