import {
  REQUIREMENTS_GENRES_DELETE,
  REQUIREMENTS_GENRES_LIST,
  REQUIREMENTS_GENRES_SAVE,
  REQUIREMENTS_GENRES_SET_DATA,
  SET_NOTIFICATIONS_ERRORS,
  SET_NOTIFICATIONS_SUCCESS,
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
      async [REQUIREMENTS_GENRES_SET_DATA](state, genres) {
        state.data = genres;
      },
    },
    actions: {
      async [REQUIREMENTS_GENRES_LIST]({ commit }) {
        commit(REQUIREMENTS_GENRES_SET_DATA, await services.Requirements.getGenres());
      },
      async [REQUIREMENTS_GENRES_SAVE]({ dispatch }, payload = { genre: undefined }) {
        const result = await services.Requirements.putGenre({ name: payload.genre });
        if (result.error) {
          dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_CRUDNOTIFICATIONS}/${SET_NOTIFICATIONS_ERRORS}`, { messageError: result.message }, { root: true });
        } else {
          dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_CRUDNOTIFICATIONS}/${SET_NOTIFICATIONS_SUCCESS}`, { messageSuccess: `Gênero ${payload.category} cadastrado com sucesso!` }, { root: true });
        }
        dispatch(REQUIREMENTS_GENRES_LIST);
      },
      async [REQUIREMENTS_GENRES_DELETE]({ dispatch }, payload = { genreId: undefined }) {
        const result = await services.Requirements.deleteGenre(payload.genreId);
        if (result.error) {
          dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_CRUDNOTIFICATIONS}/${SET_NOTIFICATIONS_ERRORS}`, { messageError: result.message }, { root: true });
        } else {
          dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_CRUDNOTIFICATIONS}/${SET_NOTIFICATIONS_SUCCESS}`, { messageSuccess: 'Gênero excluído com sucesso!' }, { root: true });
        }
        dispatch(REQUIREMENTS_GENRES_LIST);
      },
    },
    namespaced: true,
  }),
};
