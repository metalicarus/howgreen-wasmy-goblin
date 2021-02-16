<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="12" lg="6">
        <v-row>
          <v-col cols="12" lg="6">
            <v-text-field
              label="Título"
              v-model="title"
              :rules="requiredFieldRule"
              outlined
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              label="Título Original"
              v-model="originalTitle"
              :rules="requiredFieldRule"
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="6">
            <v-select
              :items="categories"
              v-model="category"
              item-text="name"
              :rules="requiredFieldRule"
              label="Categoria"
              outlined
            >
              <template #item="{item}">
                {{item.name}}
              </template>
            </v-select>
          </v-col>
          <v-col cols="12" lg="6">
            <v-select
              :items="genres"
              v-model="genre"
              multiple
              :rules="requiredFieldRule"
              item-text="name"
              label="Gênero"
              outlined
            >
              <template #item="{item}">
                {{item.name}}
              </template>
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Capa"
              v-model="cover"
              :rules="requiredFieldRule"
              outlined
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6">
        <v-img :src="cover" width="100%"/>
      </v-col>
    </v-row>

  </v-form>
</template>

<script>
import { STORE_MAIN_REQUIREMENTS_MODULE } from '@/store/StoreNamesEnum';
import {
  STORE_MAIN_MODULE_REQUIREMENTS_CATEGORIES,
  STORE_MAIN_MODULE_REQUIREMENTS_GENRES,
} from '@/store/modules/StoreModulesNamesEnum';
import { REQUIREMENTS_CATEGORIES_LIST, REQUIREMENTS_GENRES_LIST } from '@/store/modules/ActionNamesEnum';

export default {
  name: 'MoviesForm',
  data() {
    return {
      valid: true,
      title: undefined,
      originalTitle: undefined,
      genre: undefined,
      cover: undefined,
      category: undefined,
      requiredFieldRule: [
        (v) => !!v || 'Campo requerido',
      ],
    };
  },
  computed: {
    categories() {
      return this.$store.state.requirements.categories.data;
    },
    genres() {
      return this.$store.state.requirements.genres.data;
    },
  },
  mounted() {
    this.populateCategories();
    this.populateGenres();
  },
  methods: {
    populateCategories() {
      this.$store.dispatch(`${STORE_MAIN_REQUIREMENTS_MODULE}/${STORE_MAIN_MODULE_REQUIREMENTS_CATEGORIES}/${REQUIREMENTS_CATEGORIES_LIST}`);
    },
    populateGenres() {
      this.$store.dispatch(`${STORE_MAIN_REQUIREMENTS_MODULE}/${STORE_MAIN_MODULE_REQUIREMENTS_GENRES}/${REQUIREMENTS_GENRES_LIST}`);
    },
    save() {
      if (this.$refs.form.validate()) {
        this.clearForm();
      }
    },
    clearForm() {
      console.log('clear');
    },
  },
};
</script>

<style scoped>

</style>
