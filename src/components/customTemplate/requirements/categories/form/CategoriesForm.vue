<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="12">
        <v-text-field
          label="Categoria"
          v-model="category"
          :rules="categoryRules"
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
import { STORE_MAIN_MODULE_REQUIREMENTS_CATEGORIES } from '@/store/modules/StoreModulesNamesEnum';
import { REQUIREMENTS_CATEGORIES_SAVE } from '@/store/modules/ActionNamesEnum';

export default {
  name: 'CategoriesForm',
  data() {
    return {
      valid: true,
      category: undefined,
      categoryRules: [
        (v) => !!v || 'Campo requerido',
      ],
    };
  },
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch(`${STORE_MAIN_REQUIREMENTS_MODULE}/${STORE_MAIN_MODULE_REQUIREMENTS_CATEGORIES}/${REQUIREMENTS_CATEGORIES_SAVE}`, { category: this.category });
      }
    },
  },
};
</script>

<style scoped>

</style>
