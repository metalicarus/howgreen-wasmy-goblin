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
          <v-btn color="blue darken-1" text @click="dialog = false">FECHAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'BtnWithModalDefault',
  props: {
    width: { type: [String, Number], required: false },
    persistent: { type: Boolean, required: false, default() { return true; } },
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>

</style>
