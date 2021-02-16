<template>
  <v-list dense>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="@/assets/img.png"></v-img>
      </v-list-item-avatar>
      <v-list-item-title>{{userInfos}}</v-list-item-title>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item
      v-for="item in singles"
      :key="item.title"
      @click="redirectToRoute(item.routeName)"
      link
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-group v-for="(group, index) in groups" :key="index">
      <template #activator>
        <v-list-item-icon>
          <v-icon>{{ group.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{group.activatorTitle}}</v-list-item-title>
      </template>
      <v-list-item
        v-for="item in group.items"
        :key="item.title"
        @click="redirectToRoute(item.routeName)"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>
<script>
export default {
  name: 'Menu',
  data() {
    return {
      singles: [
        { title: 'Filmes', icon: 'fas fa-film', routeName: '#Movies' },
        // { title: 'Livros', icon: 'fas fa-book', routeName: '' },
        // { title: 'HQs', icon: 'fas fa-hat-wizard', routeName: '' },
        // { title: 'Coleções', icon: 'fas fa-layer-group', routeName: '' },
        // { title: 'Wish List', icon: 'far fa-heart', routeName: '' },
      ],
      groups: [
        {
          activatorTitle: 'Pré-requisitos',
          icon: 'fas fa-check-double',
          items: [
            { title: 'Categorias', routeName: '#RequirementsCategoriesList' },
            { title: 'Gêneros', routeName: '#RequirementsGenresList' },
            // { title: 'Autores', routeName: '' },
          ],
        },
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
  methods: {
    getUserDetails() {
      this.$store.dispatch('authentication/auth/AUTH_SET_LOCAL_USER_DETAILS');
    },
    redirectToLogin() {
      this.getUserDetails();
    },
    redirectToRoute(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>
