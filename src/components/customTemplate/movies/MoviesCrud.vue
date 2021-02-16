<template>
  <btn-with-modal-default width="50%">
    <template #btnActivator="props">
      <btn-new :v-on="props.on" :v-bind="{color: 'blue', icon: true}"/>
    </template>
    <template #content>
      <v-card-title>Cadastrar Filme</v-card-title>
      <v-card-text>
        <movies-form />
      </v-card-text>
    </template>
  </btn-with-modal-default>
</template>

<script>
import BtnWithModalDefault from '@/components/modules/concrete/complex/BtnWithModalDefault';
import BtnNew from '@/components/basicTemplate/basics/btn/BtnNew';
import MoviesForm from '@/components/customTemplate/movies/form/MoviesForm';

export default {
  name: 'MoviesCrud',
  components: { MoviesForm, BtnNew, BtnWithModalDefault },
};
</script>

<style scoped>

</style>
