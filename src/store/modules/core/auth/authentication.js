import {
  AUTH_GET_LOCAL_USER_DETAILS,
  AUTH_LOGIN, AUTH_REFRESH_TOKEN, AUTH_SET_LOCAL_USER_DETAILS,
  AUTH_USER_LOGOUT,
  AUTH_USER_OK, NAVIGATION_GOTO,
  SET_NOTIFICATIONS_AUTHORIZED,
  SET_NOTIFICATIONS_UNAUTHORIZED,
  UNSET_NOTIFICATIONS_AUTHORIZED,
  UNSET_NOTIFICATIONS_UNAUTHORIZED,
} from '@/store/modules/ActionNamesEnum';
import services from '@/services';
import {
  STORE_CORE_NAVIGATIONS_MODULE, STORE_CORE_NAVIGATIONS_NAVIGATIONS,
  STORE_CORE_NOTIFICATIONS_AUTHNOTIFICATIONS,
  STORE_CORE_NOTIFICATIONS_MODULE,
} from '@/store/StoreNamesEnum';

export default {
  use: () => ({
    state: {
      authenticated: undefined,
      credentials: undefined,
      userDetails: undefined,
    },
    mutations: {
      [AUTH_USER_OK](state, credentials) {
        state.authenticated = true;
        state.credentials = credentials;
        localStorage.setItem('howGreenWasMyGoblinToken', credentials.access_token);
      },
      [AUTH_USER_LOGOUT](state) {
        state.authenticated = undefined;
        state.credentials = undefined;
        localStorage.removeItem('howGreenWasMyGoblinToken');
        localStorage.removeItem('howGreenWasMyGoblinUserDetails');
      },
      [AUTH_GET_LOCAL_USER_DETAILS]() {
        const local = localStorage.getItem('howGreenWasMyGoblinUserDetails');
        if (local !== undefined) return JSON.parse(local);
        return local;
      },
      [AUTH_SET_LOCAL_USER_DETAILS](state, userDetails) {
        state.userDetails = userDetails;
        localStorage.setItem('howGreenWasMyGoblinUserDetails', JSON.stringify(userDetails));
      },
    },
    actions: {
      async [AUTH_SET_LOCAL_USER_DETAILS]({ commit, getters }) {
        const token = getters.getToken();
        await services.Auth.accessToken(token);
        const infos = await services.Auth.userDetails();
        if (infos !== undefined) commit(AUTH_SET_LOCAL_USER_DETAILS, infos);
        return infos;
      },
      async [AUTH_USER_LOGOUT]({ commit, dispatch }) {
        commit(AUTH_USER_LOGOUT);
        await dispatch(`${STORE_CORE_NAVIGATIONS_MODULE}/${STORE_CORE_NAVIGATIONS_NAVIGATIONS}/${NAVIGATION_GOTO}`, { goto: 'Login' }, { root: true });
      },
      async [AUTH_REFRESH_TOKEN]({ getters }) {
        const localToken = getters.getToken();
        return localToken !== undefined;
      },
      async [AUTH_LOGIN]({ commit, dispatch },
        payload = { username: undefined, password: undefined }) {
        const formData = new FormData();
        formData.append('username', payload.username);
        formData.append('password', payload.password);
        formData.append('grant_type', 'password');
        const auth = await services.Auth.authorization(formData);
        if (auth !== 'invalid_grant') {
          commit(AUTH_USER_OK, auth);
          const userDetails = dispatch(AUTH_SET_LOCAL_USER_DETAILS);
          await dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_AUTHNOTIFICATIONS}/${SET_NOTIFICATIONS_AUTHORIZED}`, { username: userDetails.name }, { root: true });
          await dispatch(`${STORE_CORE_NAVIGATIONS_MODULE}/${STORE_CORE_NAVIGATIONS_NAVIGATIONS}/${NAVIGATION_GOTO}`, { goto: 'Home' }, { root: true });
          await dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_AUTHNOTIFICATIONS}/${UNSET_NOTIFICATIONS_AUTHORIZED}`, {}, { root: true });
        } else {
          await dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_AUTHNOTIFICATIONS}/${SET_NOTIFICATIONS_UNAUTHORIZED}`, {}, { root: true });
          await dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_AUTHNOTIFICATIONS}/${UNSET_NOTIFICATIONS_UNAUTHORIZED}`, {}, { root: true });
        }
      },
    },
    getters: {
      getToken: (state) => () => {
        if (state.credentials !== undefined && state.credentials.access_token !== undefined) {
          return state.credentials.access_token;
        }
        return localStorage.getItem('howGreenWasMyGoblinToken');
      },
    },
    namespaced: true,
  }),
};
