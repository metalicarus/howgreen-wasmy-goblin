import requirements from './requirements/index';

export const storeMainRequirementsModule = { modules: { ...requirements.use() }, namespaced: true };
export const store = '';
