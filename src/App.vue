<template>
  <v-app v-if="$route.name !== 'Login'">
    <v-navigation-drawer
      v-model="drawer"
      :temporary="temporary"
      app
    >
      <Menu />
    </v-navigation-drawer>
    <v-app-bar
      scroll-target="#scrolling-techniques-7"
      class="elevation-1"
      dense
      app
    >
      <v-app-bar-nav-icon @click="temporary = !temporary; drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>{{title}}</v-app-bar-title>
      <v-spacer/>
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>{{darkThemeIcon}}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
  <login v-else/>
</template>
<script>

import Login from '@/views/auth/Login.vue';
import Menu from '@/components/basicTemplate/menu/Menu.vue';

export default {
  components: { Menu, Login },
  data() {
    return {
      drawer: true,
      temporary: false,
      mini: true,
      title: 'How Green Was My Goblin',
    };
  },
  computed: {
    darkThemeIcon() {
      return (this.$vuetify.theme.dark) ? 'far fa-moon' : 'far fa-sun';
    },
  },
};
</script>
