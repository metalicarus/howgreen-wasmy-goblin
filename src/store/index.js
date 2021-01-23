import Vue from 'vue';
import Vuex from 'vuex';

import { STORE_CORE_AUTH_MODULE, STORE_CORE_NOTIFICATIONS_MODULE } from '@/store/StoreNamesEnum';
import { storeCoreAuthModule, storeCoreNotificationsModule } from './modules/core';

Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: {
    [STORE_CORE_AUTH_MODULE]: { ...storeCoreAuthModule },
    [STORE_CORE_NOTIFICATIONS_MODULE]: { ...storeCoreNotificationsModule },
  },
});
