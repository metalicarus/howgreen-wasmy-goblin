<template>
  <v-btn
    v-bind="bind"
    v-on="vOn"
    @click="emit"
    >
     <v-icon v-if="icon">{{icon}}</v-icon>
    {{(label) ? label : null}}
  </v-btn>
</template>

<script>
export default {
  name: 'BtnDefaultAbstract',
  props: {
    icon: { type: String, required: false },
    label: { type: String, required: false },
    vOn: { type: Object, required: false },
  },
  computed: {
    bind() {
      return this.$attrs['v-bind'];
    },
  },
  methods: {
    emit() {
      this.$emit('btnDefaultAbstractClick');
    },
  },
};
</script>

<style scoped>

</style>
