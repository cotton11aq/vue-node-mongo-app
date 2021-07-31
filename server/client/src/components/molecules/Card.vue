<template lang="pug">
  div
    v-card(class="mx-auto" max-width="400")
      v-img(class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg")

      v-card-subtitle(class="pb-0") {{ productInfo.title }}

      v-card-text(class="text--primary")
        div {{ productInfo.description }}

      v-card-text(class="text--primary")
        div {{ productInfo.price }}円
    v-card-actions
      v-btn(color="orange",text) カートに入れる
</template>

<script>
export default {
  props: ['productInfo'],
  name: 'Card',
};
</script>
