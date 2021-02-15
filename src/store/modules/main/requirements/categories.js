import {
  REQUIREMENTS_CATEGORIES_LIST,
  REQUIREMENTS_CATEGORIES_SAVE,
  REQUIREMENTS_CATEGORIES_SET_COLUMN_NAMES,
  REQUIREMENTS_CATEGORIES_SET_DATA,
} from '@/store/modules/ActionNamesEnum';
import services from '@/services';

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
        await services.Requirements.putCategory({ name: payload.category });
        dispatch(REQUIREMENTS_CATEGORIES_LIST);
      },
    },
    getters: { },
    namespaced: true,
  }),
};
