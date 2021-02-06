<template>
  <btn-default
    :v-bind="vBind"
    :v-on="vOn"
    icon="fas fa-plus"
  />
</template>

<script>
import BtnDefault from '@/components/modules/concrete/basics/btn/BtnDefault';

export default {
  name: 'BtnNew',
  props: {
    vOn: { type: Object, required: false },
    vBind: { type: Object, required: false },
  },
  components: { BtnDefault },
};
</script>

<style scoped>

</style>
