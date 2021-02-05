import navigations from '@/store/modules/core/navigations/navigations';
import { STORE_CORE_MODULE_NAVIGATIONS } from '@/store/modules/StoreModulesNamesEnum';

export default {
  use: () => ({
    [STORE_CORE_MODULE_NAVIGATIONS]: navigations.use(),
  }),
};
