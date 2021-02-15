<template>
  <btn-default
    :v-bind="vBind"
    :v-on="vOn"
    icon="fas fa-trash"
  />
</template>

<script>
import BtnDefault from '@/components/modules/concrete/basics/btn/BtnDefault';

export default {
  name: 'BtnDelete',
  props: {
    vOn: { type: Object, required: false },
    vBind: { type: Object, required: false },
  },
  components: { BtnDefault },
};
</script>

<style scoped>

</style>
