import authNotifications from '@/store/modules/core/notifications/authNotifications';
import crudNotifications from '@/store/modules/core/notifications/crudNotifications';
import {
  STORE_CORE_NOTIFICATIONS_AUTHNOTIFICATIONS,
  STORE_CORE_NOTIFICATIONS_CRUDNOTIFICATIONS,
} from '@/store/StoreNamesEnum';

export default {
  use: () => ({
    [STORE_CORE_NOTIFICATIONS_AUTHNOTIFICATIONS]: authNotifications.use(),
    [STORE_CORE_NOTIFICATIONS_CRUDNOTIFICATIONS]: crudNotifications.use(),
  }),
};
