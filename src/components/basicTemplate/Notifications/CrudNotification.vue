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
  name: 'CrudNotification',
  data() {
    return {
      snackbar: false,
    };
  },
  computed: {
    crudNotification() {
      if (this.$store.state.notifications.crudNotifications.notification.show) {
        this.modify(true);
        return (this.$store.state.notifications.crudNotifications.notification.type === 'success');
      }
      return undefined;
    },
    color() {
      return (this.crudNotification) ? 'green' : 'red';
    },
    title() {
      if (this.$store.state.notifications.crudNotifications.notification.title !== undefined) {
        return this.$store.state.notifications.crudNotifications.notification.title;
      }
      return '';
    },
    message() {
      if (this.$store.state.notifications.crudNotifications.notification.message !== undefined) {
        return this.$store.state.notifications.crudNotifications.notification.message;
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
