import navigations from '@/store/modules/core/navigations/navigations';

export default {
  use: () => ({
    navigations: navigations.use(),
  }),
};
