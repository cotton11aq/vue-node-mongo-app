<template>
  <div>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <router-link
          :to="{
            name: 'ItemDetail',
            params: {
              id: product._id,
              title: product.title,
              productInfo: product,
            },
          }"
        >
          <Card :productInfo="product" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
import Card from '../molecules/Card.vue';
import Methods from '@/api/methods';
export default {
  name: 'CardList',
  components: {
    Card,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        let response = await Methods.getProducts();
        this.products = response.data.products;
      } catch (err) {
        console.log(err);
      }
    },
    // ...mapActions(['getProducts']),
  },
};
</script>

<style scoped lang="stylus">
ul
  display flex
  flex-wrap wrap
  justify-content center
  list-style none

li
  margin 10px
</style>
