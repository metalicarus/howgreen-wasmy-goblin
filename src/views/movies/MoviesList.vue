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
import { STORE_MAIN_MOVIES_MODULE } from '@/store/StoreNamesEnum';
import {
  STORE_MAIN_MODULE_MOVIES,
} from '@/store/modules/StoreModulesNamesEnum';
import { MOVIES_DELETE, MOVIES_LIST } from '@/store/modules/ActionNamesEnum';

export default {
  name: 'MoviesList',
  components: { MoviesCrud, BtnWithModalDeleteRecord },
  data() {
    return {
      search: '',
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Título', value: 'title' },
        { text: 'Título Original', value: 'originalTitle' },
        { text: 'Gêneros', value: 'resumeGenres' },
        { text: 'Mídia', value: 'midia' },
        {
          text: 'Ações', value: 'actions', sortable: false, align: 'center',
        },
      ],
    };
  },
  computed: {
    movies() {
      const movies = this.$store.state.movies.movies.data;
      if (movies !== undefined) {
        movies.forEach((e) => {
          e.midia = e.categories.map((j) => j.name).join(', ');
          e.resumeGenres = e.genres.map((j) => j.name).join(', ');
        });
      }
      return movies;
    },
  },
  mounted() {
    this.all();
  },
  methods: {
    all() {
      this.$store.dispatch(`${STORE_MAIN_MOVIES_MODULE}/${STORE_MAIN_MODULE_MOVIES}/${MOVIES_LIST}`);
    },
    deleteItem(item, response) {
      if (response) {
        this.$store.dispatch(`${STORE_MAIN_MOVIES_MODULE}/${STORE_MAIN_MODULE_MOVIES}/${MOVIES_DELETE}`, { movieId: item.id });
      }
    },
  },
};
</script>

<style scoped>

</style>
