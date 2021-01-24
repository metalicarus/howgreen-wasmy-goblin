import auth from './auth/index';
import notifications from './notifications/index';
import navigations from './navigations/index';

export const storeCoreAuthModule = { modules: { ...auth.use() }, namespaced: true };
export const storeCoreNotificationsModule = {
  modules: { ...notifications.use() },
  namespaced: true,
};
export const storeCoreNavigationsModule = { modules: { ...navigations.use() }, namespaced: true };
export const store = '';
