import authNotifications from '@/store/modules/core/notifications/authNotifications';
import { STORE_CORE_NOTIFICATIONS_AUTHNOTIFICATIONS } from '@/store/StoreNamesEnum';

export default {
  use: () => ({
    [STORE_CORE_NOTIFICATIONS_AUTHNOTIFICATIONS]: authNotifications.use(),
  }),
};
