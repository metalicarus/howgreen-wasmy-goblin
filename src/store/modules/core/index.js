import auth from './auth/index';
import notifications from './notifications/index';

export const storeCoreAuthModule = { modules: { ...auth.use() }, namespaced: true };
export const storeCoreNotificationsModule = {
  modules: { ...notifications.use() },
  namespaced: true,
};
export const store = '';
