import {
  REQUIREMENTS_CATEGORIES_LIST, REQUIREMENTS_CATEGORIES_SET_COLUMN_NAMES,
  REQUIREMENTS_CATEGORIES_SET_DATA,
} from '@/store/modules/ActionNamesEnum';

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
        commit(REQUIREMENTS_CATEGORIES_SET_DATA, {});
        commit(REQUIREMENTS_CATEGORIES_SET_COLUMN_NAMES, {});
      },
    },
    getters: { },
    namespaced: true,
  }),
};
