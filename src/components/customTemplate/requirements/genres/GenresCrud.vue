<template>
  <btn-with-modal-default width="25%">
    <template #btnActivator="props">
      <btn-new :v-on="props.on" :v-bind="{color: 'blue', icon: true}"/>
    </template>
    <template #content>
      <v-card-title>Cadastrar Gênero</v-card-title>
      <v-card-text>
        <genres-form />
      </v-card-text>
    </template>
  </btn-with-modal-default>
</template>

<script>
import BtnWithModalDefault from '@/components/modules/concrete/complex/BtnWithModalDefault';
import GenresForm from '@/components/customTemplate/requirements/genres/form/GenresForm';
import BtnNew from '@/components/basicTemplate/basics/btn/BtnNew';

export default {
  name: 'GenresCrud',
  components: { BtnNew, GenresForm, BtnWithModalDefault },
};
</script>

<style scoped>

</style>
