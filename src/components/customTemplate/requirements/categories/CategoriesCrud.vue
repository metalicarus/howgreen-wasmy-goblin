<template>
  <btn-with-modal-default width="25%">
    <template #btnActivator="props">
      <btn-new :v-on="props.on" :v-bind="{color: 'blue', icon: true}"/>
    </template>
    <template #content>
      <v-card-title>Cadastrar Categoria</v-card-title>
      <v-card-text>
        <categories-form />
      </v-card-text>
    </template>
  </btn-with-modal-default>
</template>

<script>
import BtnNew from '@/components/basicTemplate/basics/btn/BtnNew';
import BtnWithModalDefault from '@/components/modules/concrete/complex/BtnWithModalDefault';
import CategoriesForm from '@/components/customTemplate/requirements/categories/form/CategoriesForm';

export default {
  name: 'CategoriesCrud',
  components: { CategoriesForm, BtnWithModalDefault, BtnNew },
};
</script>

<style scoped>

</style>
