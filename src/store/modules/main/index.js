import requirements from './requirements/index';
import movies from './movies/index';

export const storeMainRequirementsModule = { modules: { ...requirements.use() }, namespaced: true };
export const storeMainMoviesModule = { modules: { ...movies.use() }, namespaced: true };
export const store = '';
