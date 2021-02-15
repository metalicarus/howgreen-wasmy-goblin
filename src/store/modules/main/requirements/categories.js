import {
  REQUIREMENTS_CATEGORIES_LIST,
  REQUIREMENTS_CATEGORIES_SAVE,
  REQUIREMENTS_CATEGORIES_SET_COLUMN_NAMES,
  REQUIREMENTS_CATEGORIES_SET_DATA, SET_NOTIFICATIONS_ERRORS, SET_NOTIFICATIONS_SUCCESS,
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
      async [REQUIREMENTS_CATEGORIES_SET_DATA](state, categories) {
        state.data = categories;
      },
      async [REQUIREMENTS_CATEGORIES_SET_COLUMN_NAMES](state, columnNames) {
        state.columnNames = columnNames;
      },
    },
    actions: {
      async [REQUIREMENTS_CATEGORIES_LIST]({ commit }) {
        commit(REQUIREMENTS_CATEGORIES_SET_DATA, await services.Requirements.getCategories());
        commit(REQUIREMENTS_CATEGORIES_SET_COLUMN_NAMES, {});
      },
      async [REQUIREMENTS_CATEGORIES_SAVE]({ dispatch }, payload = { category: undefined }) {
        const result = await services.Requirements.putCategory({ name: payload.category });
        if (result.error) {
          dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_CRUDNOTIFICATIONS}/${SET_NOTIFICATIONS_ERRORS}`, { messageError: result.message }, { root: true });
        } else {
          dispatch(`${STORE_CORE_NOTIFICATIONS_MODULE}/${STORE_CORE_NOTIFICATIONS_CRUDNOTIFICATIONS}/${SET_NOTIFICATIONS_SUCCESS}`, { objectCreated: `Categoria ${payload.category}` }, { root: true });
        }
        dispatch(REQUIREMENTS_CATEGORIES_LIST);
      },
    },
    getters: { },
    namespaced: true,
  }),
};
