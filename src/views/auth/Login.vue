<template>
  <div>
    <h1>login</h1>
  </div>
</template>

<script>
import services from '@/services';

export default {
  name: 'Login',
  mounted() {
    services.auth.authorization('mateus@verdemeuduende.com.br', '123456');
  },
};
</script>

<style scoped>

</style>
