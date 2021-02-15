import {
  SET_NOTIFICATIONS_SUCCESS,
  UNSET_NOTIFICATION_CRUD,
} from '@/store/modules/ActionNamesEnum';

export default {
  use: () => ({
    state: {
      created: { title: undefined, message: undefined, show: false },
    },
    mutations: {
      [SET_NOTIFICATIONS_SUCCESS](state, notification) {
        state.created.title = notification.title;
        state.created.message = notification.message;
        state.show = true;
      },
      [UNSET_NOTIFICATION_CRUD](state) {
        state.created.title = undefined;
        state.created.message = undefined;
        state.created.show = false;
      },
    },
    actions: {
      async [SET_NOTIFICATIONS_SUCCESS]({ commit }, payload = { objectCreated: undefined }) {
        const notification = { title: 'Sucesso!', message: `${payload.objectCreated} criado com sucesso!` };
        commit(SET_NOTIFICATIONS_SUCCESS, notification);
      },
      async [UNSET_NOTIFICATION_CRUD]({ commit }) {
        setTimeout(() => {
          commit(UNSET_NOTIFICATION_CRUD);
        }, 8000);
      },
    },
    namespaced: true,
  }),
};
