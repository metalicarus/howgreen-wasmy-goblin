import authentication from '@/store/modules/core/auth/authentication';

export default {
  use: () => ({
    auth: authentication.use(),
  }),
};
