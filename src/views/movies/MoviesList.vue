<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col cols="12" lg="6">FILMES</v-col>
        <v-col cols="12" lg="6">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="search"
                append-icon="fas fa-search"
                label="Buscar..."
                single-line
                hide-details
                outlined
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-title>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="movies"
          :search="search"
        >
          <template #footer.page-text>
            <movies-crud />
          </template>
          <template #item.actions="{item}">
            <btn-with-modal-delete-record @btnWithModalDeleteRecord="deleteItem(item, $event)"/>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

import BtnWithModalDeleteRecord from '@/components/modules/concrete/complex/BtnWithModalDeleteRecord';
import MoviesCrud from '@/components/customTemplate/movies/MoviesCrud';

export default {
  name: 'MoviesList',
  components: { MoviesCrud, BtnWithModalDeleteRecord },
  data() {
    return {
      search: '',
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Gênero', value: 'name' },
        { text: 'Ações', value: 'actions', sortable: false },
      ],
    };
  },
  computed: {
    movies() {
      // return this.$store.state.movies.data;
      return [];
    },
  },
  mounted() {
    this.all();
  },
  methods: {
    all() {
      // this.$store.dispatc
      // h(`${STORE_MAIN_REQUIREMENTS_MODULE}/${STORE_MAIN_MODULE_REQU
      // IREMENTS_GENRES}/${REQUIREMENTS_GENRES_LIST}`);
    },
    deleteItem(item, response) {
      if (response) {
        // this.$store.dispatch(`${STORE_MAIN_REQUIREMENTS_M
        // ODULE}/${STORE_MAIN_MODULE_REQUIREMENTS_GENRES}/${REQUIRE
        // MENTS_GENRES_DELETE}`, { genreId: item.id });
      }
    },
  },
};
</script>

<style scoped>

</style>
