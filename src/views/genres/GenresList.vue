<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col cols="12" lg="6">GÊNEROS</v-col>
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
          :items="genres"
          :search="search"
        >
          <template #footer.page-text>
            <genres-crud/>
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
import {
  STORE_MAIN_MODULE_REQUIREMENTS_GENRES,
} from '@/store/modules/StoreModulesNamesEnum';
import { STORE_MAIN_REQUIREMENTS_MODULE } from '@/store/StoreNamesEnum';
import {
  REQUIREMENTS_GENRES_DELETE,
  REQUIREMENTS_GENRES_LIST,
} from '@/store/modules/ActionNamesEnum';
import BtnWithModalDeleteRecord from '@/components/modules/concrete/complex/BtnWithModalDeleteRecord';
import GenresCrud from '@/components/customTemplate/requirements/genres/GenresCrud';

export default {
  name: 'GenresList',
  components: { GenresCrud, BtnWithModalDeleteRecord },
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
    genres() {
      return this.$store.state.requirements.genres.data;
    },
  },
  mounted() {
    this.all();
  },
  methods: {
    all() {
      this.$store.dispatch(`${STORE_MAIN_REQUIREMENTS_MODULE}/${STORE_MAIN_MODULE_REQUIREMENTS_GENRES}/${REQUIREMENTS_GENRES_LIST}`);
    },
    deleteItem(item, response) {
      if (response) {
        this.$store.dispatch(`${STORE_MAIN_REQUIREMENTS_MODULE}/${STORE_MAIN_MODULE_REQUIREMENTS_GENRES}/${REQUIREMENTS_GENRES_DELETE}`, { genreId: item.id });
      }
    },
  },
};
</script>

<style scoped>

</style>
