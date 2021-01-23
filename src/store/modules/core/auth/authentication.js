import {
  AUTH_LOGIN,
  AUTH_USER_LOGOUT,
  AUTH_USER_OK,
  SET_NOTIFICATIONS_AUTHORIZED,
  SET_NOTIFICATIONS_UNAUTHORIZED,
  UNSET_NOTIFICATIONS_AUTHORIZED,
  UNSET_NOTIFICATIONS_UNAUTHORIZED,
} from '@/store/modules/ActionNamesEnum';
import services from '@/services';
import {
  STORE_CORE_NOTIFICATIONS_AUTHNOTIFICATIONS,
  STORE_CORE_NOTIFICATIONS_MODULE,
} from '@/store/StoreNamesEnum';

export default {
  use: () => ({
    state: {
      authenticated: undefined,
      credentials: undefined,
    },
    mutations: {
      [AUTH_USER_OK](state, credentials) {
        state.authenticated = true;
        state.credentials = credentials;
        localStorage.setItem('howGreenWasMyGoblinToken', credentials.access_token);
      },
      [AUTH_USER_LOGOUT](state) {
        state.authenticated = false;
      },
    },
    actions: {
      async [AUTH_LOGIN]({ commit, dispatch },
        payload = { username: undefined, password: undefined }) {
        const formData = new FormData();
        formData.append('username', payload.username);
        formData.append('password', payload.password);
        formData.append('grant_type', 'password');
        const auth = await services.Auth.authorization(formData);
        if (auth !== 'invalid_grant') {
          commit(AUTH_USER_OK, auth);
          const userDetails = await services.Auth.userDetails();
          await dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_AUTHNOTIFICATIONS}/${SET_NOTIFICATIONS_AUTHORIZED}`, { username: userDetails.name }, { root: true });
          await dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_AUTHNOTIFICATIONS}/${UNSET_NOTIFICATIONS_AUTHORIZED}`, {}, { root: true });
        } else {
          await dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_AUTHNOTIFICATIONS}/${SET_NOTIFICATIONS_UNAUTHORIZED}`, {}, { root: true });
          await dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_AUTHNOTIFICATIONS}/${UNSET_NOTIFICATIONS_UNAUTHORIZED}`, {}, { root: true });
        }
      },
    },
    getters: { },
    namespaced: true,
  }),
};
