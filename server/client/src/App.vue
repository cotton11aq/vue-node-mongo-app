<template lang="pug">
  div
    Header
    v-main(fluid fill-height align-start)
      router-view

</template>

<script>
import Header from './components/Header.vue';
import Items from './views/Items.vue';
export default {
  name: 'App',

  components: {
    Header,
    Items,
  },

  data: () => ({
    number: 0,
  }),
  methods: {
    update() {
      this.number++;
    },
    down() {
      this.number--;
    },
  },
};
</script>
