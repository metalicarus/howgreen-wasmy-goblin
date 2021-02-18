import Vue from 'vue';
import Vuex from 'vuex';

import {
  STORE_CORE_AUTH_MODULE,
  STORE_CORE_NAVIGATIONS_MODULE,
  STORE_CORE_NOTIFICATIONS_MODULE, STORE_MAIN_MOVIES_MODULE, STORE_MAIN_REQUIREMENTS_MODULE,
} from '@/store/StoreNamesEnum';
import { storeMainMoviesModule, storeMainRequirementsModule } from '@/store/modules/main';
import {
  storeCoreAuthModule,
  storeCoreNavigationsModule,
  storeCoreNotificationsModule,
} from './modules/core';

Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: {
    [STORE_CORE_AUTH_MODULE]: { ...storeCoreAuthModule },
    [STORE_CORE_NOTIFICATIONS_MODULE]: { ...storeCoreNotificationsModule },
    [STORE_CORE_NAVIGATIONS_MODULE]: { ...storeCoreNavigationsModule },
    [STORE_MAIN_REQUIREMENTS_MODULE]: { ...storeMainRequirementsModule },
    [STORE_MAIN_MOVIES_MODULE]: { ...storeMainMoviesModule },
  },
});
