<template>
  <v-app v-if="$route.name !== 'Login'">
    <v-navigation-drawer
      v-model="drawer"
      app
      :temporary="temporary"
    >
      <Menu />
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="white"
      scroll-target="#scrolling-techniques-7"
      class="elevation-1"
       app

    >
      <v-app-bar-nav-icon @click="temporary = !temporary; drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>How Green Was My Goblin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
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
// import menu from '@/components/basicTemplate/menu/menu.vue';

import Login from '@/views/auth/Login.vue';
import Menu from '@/components/basicTemplate/menu/Menu.vue';

export default {
  components: { Menu, Login },
  // components: { menu },
  data() {
    return {
      drawer: true,
      temporary: false,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      mini: true,
    };
  },
};
</script>
