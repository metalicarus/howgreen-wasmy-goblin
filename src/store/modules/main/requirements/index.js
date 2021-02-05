import { STORE_MAIN_MODULE_REQUIREMENTS_CATEGORIES } from '@/store/modules/StoreModulesNamesEnum';
import categories from '@/store/modules/main/requirements/categories';

export default {
  use: () => ({
    [STORE_MAIN_MODULE_REQUIREMENTS_CATEGORIES]: categories.use(),
  }),
};
