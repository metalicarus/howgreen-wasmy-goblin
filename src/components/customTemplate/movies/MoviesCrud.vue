<template>
  <btn-with-modal-default :width="width">
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
  computed: {
    width() {
      if (window.innerWidth > 1024) return '50%';
      return '100%';
    },
  },
};
</script>

<style scoped>

</style>
