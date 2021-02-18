import { STORE_MAIN_MODULE_MOVIES } from '@/store/modules/StoreModulesNamesEnum';
import movies from '@/store/modules/main/movies/movies';

export default {
  use: () => ({
    [STORE_MAIN_MODULE_MOVIES]: movies.use(),
  }),
};
