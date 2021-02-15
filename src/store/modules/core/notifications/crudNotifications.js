import {
  SET_NOTIFICATIONS_ERRORS,
  SET_NOTIFICATIONS_SUCCESS,
  UNSET_NOTIFICATION_CRUD,
} from '@/store/modules/ActionNamesEnum';

export default {
  use: () => ({
    state: {
      notification: {
        title: undefined, message: undefined, show: false, type: undefined,
      },
    },
    mutations: {
      [SET_NOTIFICATIONS_SUCCESS](state, notification) {
        state.notification.title = notification.title;
        state.notification.message = notification.message;
        state.notification.type = notification.type;
        state.notification.show = true;
      },
      [UNSET_NOTIFICATION_CRUD](state) {
        state.notification.title = undefined;
        state.notification.message = undefined;
        state.notification.show = false;
        state.notification.type = undefined;
      },
    },
    actions: {
      async [SET_NOTIFICATIONS_ERRORS]({ commit, dispatch },
        payload = { messageError: undefined }) {
        const notification = { title: '...Ops!', message: `${payload.messageError}`, type: 'error' };
        commit(SET_NOTIFICATIONS_SUCCESS, notification);
        dispatch(UNSET_NOTIFICATION_CRUD);
      },
      async [SET_NOTIFICATIONS_SUCCESS]({ commit, dispatch },
        payload = { objectCreated: undefined }) {
        const notification = { title: 'Sucesso!', message: `${payload.objectCreated} criado com sucesso!`, type: 'success' };
        commit(SET_NOTIFICATIONS_SUCCESS, notification);
        dispatch(UNSET_NOTIFICATION_CRUD);
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
