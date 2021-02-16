<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="12">
        <v-text-field
          label="Gênero"
          v-model="genre"
          :rules="genreRules"
          outlined
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn outlined color="blue" block @click="save">SALVAR</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { STORE_MAIN_REQUIREMENTS_MODULE } from '@/store/StoreNamesEnum';
import {
  STORE_MAIN_MODULE_REQUIREMENTS_GENRES,
} from '@/store/modules/StoreModulesNamesEnum';
import { REQUIREMENTS_GENRES_SAVE } from '@/store/modules/ActionNamesEnum';

export default {
  name: 'GenresForm',
  data() {
    return {
      valid: true,
      genre: undefined,
      genreRules: [
        (v) => !!v || 'Campo requerido',
      ],
    };
  },
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch(`${STORE_MAIN_REQUIREMENTS_MODULE}/${STORE_MAIN_MODULE_REQUIREMENTS_GENRES}/${REQUIREMENTS_GENRES_SAVE}`, { genre: this.genre });
        this.clearForm();
      }
    },
    clearForm() {
      this.genre = undefined;
    },
  },
};
</script>

<style scoped>

</style>
