<template>
  <btn-with-modal-default width="500">
    <template #btnActivator="props">
      <btn-delete :v-on="props.on"/>
    </template>
    <template #content>
      <v-card-title>Confirmar ação</v-card-title>
      <v-card-text>
        <p>Tem certeza que deseja excluir este registro?</p>
      </v-card-text>
    </template>
  </btn-with-modal-default>
</template>

<script>
import BtnWithModalDefault from '@/components/modules/concrete/complex/BtnWithModalDefault';
import BtnDelete from '@/components/basicTemplate/basics/btn/BtnDelete';

export default {
  name: 'BtnWithModalDeleteRecord',
  components: { BtnDelete, BtnWithModalDefault },
};
</script>

<style scoped>

</style>
