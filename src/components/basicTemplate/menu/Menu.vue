<template>
  <v-list-item class="px-2">
    <v-list-item-avatar>
      <v-img src="@/assets/img.png"></v-img>
    </v-list-item-avatar>
    <v-list-item-title>{{userInfos}}</v-list-item-title>
  </v-list-item>
</template>
<script>
export default {
  name: 'Menu',
  data() {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
    };
  },
  computed: {
    userInfos() {
      const userInfos = this.$store.state.authentication.auth.userDetails;
      if (userInfos === undefined) {
        this.redirectToLogin();
        return '';
      }
      return this.$store.state.authentication.auth.userDetails.name;
    },
  },
  mounted() {
    // this.getUserDetails();
  },
  methods: {
    getUserDetails() {
      this.$store.dispatch('authentication/auth/AUTH_SET_LOCAL_USER_DETAILS');
    },
    redirectToLogin() {
      this.getUserDetails();
    },
  },
};
</script>
