<template>
  <div>
    <navbar />
    <div class="container-lg py-3"><router-view /></div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style></style>
