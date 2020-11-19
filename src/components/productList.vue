<template>
  <ul class="catalog__list" >
    <product-item
    v-for="product in products"
    :product="product"
    :key="product.id"/>
  </ul>
</template>

<script>
import productItem from './productItem.vue';

export default {
  components: { productItem },
  props: ['products'],
  data() {
    return {
      color: '#73B6EA',
    };
  },
};
</script>

<style scoped>

</style>
