import {
  STORE_MAIN_MODULE_REQUIREMENTS_CATEGORIES,
  STORE_MAIN_MODULE_REQUIREMENTS_GENRES,
} from '@/store/modules/StoreModulesNamesEnum';
import categories from '@/store/modules/main/requirements/categories';
import genres from '@/store/modules/main/requirements/genres';

export default {
  use: () => ({
    [STORE_MAIN_MODULE_REQUIREMENTS_CATEGORIES]: categories.use(),
    [STORE_MAIN_MODULE_REQUIREMENTS_GENRES]: genres.use(),
  }),
};
