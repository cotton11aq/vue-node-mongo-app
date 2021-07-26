<template lang="pug">
  div
    Card(:productInfo="product")
    button(@click="decrement",v-if="this.num > 1") decrement
    button(v-else,disabled) decrement
    span 数量
    input(value="0",v-model="num")
    button(@click="increment") increment
    button カートに入れる
</template>

<script>
import Card from '../components/molecules/Card.vue';
import Methods from '@/api/methods';
export default {
  name: 'ItemDetail',
  components: {
    Card,
  },
  props: ['productInfo'],

  data() {
    return {
      product: '',
      num: 1,
    };
  },

  created() {
    this.getProduct();
  },

  methods: {
    async getProduct() {
      let response = await Methods.getProduct(this.$route.params.id);
      this.product = response.data.product;
    },
    decrement() {
      this.num--;
    },
    increment() {
      this.num++;
    },
  },
};
</script>
