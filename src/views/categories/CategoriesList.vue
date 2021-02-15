<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col cols="12" lg="6">CATEGORIAS</v-col>
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
          :items="categories"
          :search="search"
        >
          <template #footer.page-text>
            <categories-crud/>
          </template>
          <template #item.actions="{item}">
            <btn-delete @click.native="deleteItem(item)"/>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { STORE_MAIN_MODULE_REQUIREMENTS_CATEGORIES } from '@/store/modules/StoreModulesNamesEnum';
import { STORE_MAIN_REQUIREMENTS_MODULE } from '@/store/StoreNamesEnum';
import { REQUIREMENTS_CATEGORIES_LIST } from '@/store/modules/ActionNamesEnum';
import CategoriesCrud from '@/components/customTemplate/requirements/categories/CategoriesCrud';
import BtnDelete from '@/components/basicTemplate/basics/btn/BtnDelete';

export default {
  name: 'CategoriesList',
  components: { BtnDelete, CategoriesCrud },
  data() {
    return {
      search: '',
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Categoria', value: 'name' },
        { text: 'Actions', value: 'actions', sortable: false },

      ],
    };
  },
  computed: {
    categories() {
      return this.$store.state.requirements.categories.data;
    },
  },
  mounted() {
    this.all();
  },
  methods: {
    all() {
      this.$store.dispatch(`${STORE_MAIN_REQUIREMENTS_MODULE}/${STORE_MAIN_MODULE_REQUIREMENTS_CATEGORIES}/${REQUIREMENTS_CATEGORIES_LIST}`);
    },
    deleteItem(item) {
      console.log(item);
    },
  },
};
</script>

<style scoped>

</style>
