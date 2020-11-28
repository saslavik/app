<template>
  <ul class="catalog__list" >
    <product-item
    v-for="product in products"
    :product="product"
    :key="product.id"
    @goToPage="(pageName, pageParams) => $emit('go-to-page', pageName, pageParams)" />
  </ul>
</template>

<script>
import productItem from './productItem.vue';

export default {
  components: { productItem },
  props: ['products'],
  data() {
    return {
    };
  },
};
</script>

<style scoped>

</style>
