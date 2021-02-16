<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      :persistent="persistent"
      :max-width="width"
    >
      <template v-slot:activator="{ on, attrs }">
        <slot name="btnActivator" :on="on" :attrs="attrs" />
      </template>
      <v-card>
        <slot name="content" />
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="emit(true)">{{trueLabel}}</v-btn>
          <v-btn color="red darken-1" text @click="emit(false)">{{falseLabel}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'BtnWithModalTrueOrFalse',
  props: {
    width: { type: [String, Number], required: false },
    persistent: { type: Boolean, required: false, default() { return true; } },
    trueLabel: { type: String, required: false, default() { return 'TRUE'; } },
    falseLabel: { type: String, required: false, default() { return 'FALSE'; } },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    emit(value) {
      this.dialog = false;
      this.$emit('btnWithModalTrueOrFalseEvent', value);
    },
  },
};
</script>

<style scoped>

</style>
