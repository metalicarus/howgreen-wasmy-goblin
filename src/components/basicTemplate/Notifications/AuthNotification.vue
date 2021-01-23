<template>
  <v-snackbar
    v-model="snackbar"
    :top="true"
    :right="true"
    :color="color"
  >
    <div class="title">{{ title }}</div>
    <div class="subtitle-1">{{ message }}</div>
    <template v-slot:action="{ attrs }">
      <v-btn
        text
        color="white"
        v-bind="attrs"
        @click="snackbar = false"
      >
        FECHAR
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
    };
  },
  computed: {
    authNotification() {
      if (this.$store.state.notifications.authNotifications.authorized.show) {
        this.modify(true);
        return true;
      }
      if (this.$store.state.notifications.authNotifications.unauthorized.show) {
        this.modify(true);
        return false;
      }
      return undefined;
    },
    color() {
      return (this.authNotification) ? 'green' : 'red';
    },
    title() {
      if (this.$store.state.notifications.authNotifications.authorized.title !== undefined) {
        return this.$store.state.notifications.authNotifications.authorized.title;
      }
      if (this.$store.state.notifications.authNotifications.unauthorized.title !== undefined) {
        return this.$store.state.notifications.authNotifications.unauthorized.title;
      }
      return '';
    },
    message() {
      if (this.$store.state.notifications.authNotifications.authorized.message !== undefined) {
        return this.$store.state.notifications.authNotifications.authorized.message;
      }
      if (this.$store.state.notifications.authNotifications.unauthorized.message !== undefined) {
        return this.$store.state.notifications.authNotifications.unauthorized.message;
      }
      return '';
    },
  },
  methods: {
    modify(value) {
      this.snackbar = value;
    },
  },
};
</script>

<style scoped>

</style>
