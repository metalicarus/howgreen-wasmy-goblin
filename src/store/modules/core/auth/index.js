import authentication from '@/store/modules/core/auth/authentication';
import { STORE_CORE_MODULE_AUTH } from '@/store/modules/StoreModulesNamesEnum';

export default {
  use: () => ({
    [STORE_CORE_MODULE_AUTH]: authentication.use(),
  }),
};
