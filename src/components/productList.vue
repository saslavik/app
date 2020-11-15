<template>
  <ul class="catalog__list" >
    <product-item v-for="(product, index) in products" :key="index" :product="product" />
  </ul>
</template>

<script>
import productItem from './productItem.vue';

export default {
  components: { productItem },
  props: ['products'],
};
</script>

<style scoped>

</style>
