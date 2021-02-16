<template>
  <btn-with-modal-true-or-false
    width="500"
    false-label="Cancelar"
    true-label="Ok"
    @btnWithModalTrueOrFalseEvent="response"
  >
    <template #btnActivator="props">
      <btn-delete :v-on="props.on"/>
    </template>
    <template #content>
      <v-card-title>Confirmar ação</v-card-title>
      <v-card-text>
        <p>Tem certeza que deseja excluir este registro?</p>
      </v-card-text>
    </template>
  </btn-with-modal-true-or-false>
</template>

<script>
import BtnDelete from '@/components/basicTemplate/basics/btn/BtnDelete';
import BtnWithModalTrueOrFalse from '@/components/modules/concrete/complex/BtnWithModalTrueOrFalse';

export default {
  name: 'BtnWithModalDeleteRecord',
  components: { BtnWithModalTrueOrFalse, BtnDelete },
  methods: {
    response(eventValue) {
      this.$emit('btnWithModalDeleteRecord', eventValue);
    },
  },
};
</script>

<style scoped>

</style>
