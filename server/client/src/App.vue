<template lang="pug">
div
  Header
  v-main(fluid, fill-height, align-start)
    router-view
</template>

<script>
import Header from './components/Header.vue';
import Home from './views/Home.vue';
export default {
  name: 'App',

  components: {
    Header,
    Home,
  },
};
</script>
