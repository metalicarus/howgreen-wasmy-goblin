import {
  MOVIES_DELETE,
  MOVIES_LIST, MOVIES_SAVE,
  MOVIES_SET_DATA,
  SET_NOTIFICATIONS_ERRORS, SET_NOTIFICATIONS_SUCCESS,
} from '@/store/modules/ActionNamesEnum';
import services from '@/services';
import {
  STORE_CORE_NOTIFICATIONS_CRUDNOTIFICATIONS,
  STORE_CORE_NOTIFICATIONS_MODULE,
} from '@/store/StoreNamesEnum';

export default {
  use: () => ({
    state: {
      columnNames: undefined,
      data: undefined,
    },
    mutations: {
      async [MOVIES_SET_DATA](state, movies) {
        state.data = movies;
      },
    },
    actions: {
      async [MOVIES_LIST]({ commit }) {
        commit(MOVIES_SET_DATA, await services.Movies.getMovies());
      },
      async [MOVIES_DELETE]({ dispatch }, payload = { movieId: undefined }) {
        const result = await services.Movies.deleteMovie(payload.movieId);
        if (result.error) {
          dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_CRUDNOTIFICATIONS}/${SET_NOTIFICATIONS_ERRORS}`, { messageError: result.message }, { root: true });
        } else {
          dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_CRUDNOTIFICATIONS}/${SET_NOTIFICATIONS_SUCCESS}`, { messageSuccess: 'Filme excluído com sucesso!' }, { root: true });
        }
        dispatch(MOVIES_LIST);
      },
      async [MOVIES_SAVE]({ dispatch }, payload = {
        title: undefined,
        originalTitle: undefined,
        categories: undefined,
        genres: undefined,
        cover: undefined,
      }) {
        const result = await services.Movies.putMovie(payload);
        if (result.error) {
          dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_CRUDNOTIFICATIONS}/${SET_NOTIFICATIONS_ERRORS}`, { messageError: result.message }, { root: true });
        } else {
          dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_CRUDNOTIFICATIONS}/${SET_NOTIFICATIONS_SUCCESS}`, { messageSuccess: 'Filme cadastrado com sucesso!' }, { root: true });
        }
        dispatch(MOVIES_LIST);
      },
    },
    namespaced: true,
  }),
};
