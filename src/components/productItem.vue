<template>
    <li class="catalog__item" >
      <a class="catalog__pic" href="#">
        <img :src="product.image" :alt="product.title">
      </a>

      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>

      <span class="catalog__price">
        {{ product.price }} ₽
      </span>
      <base-colors :colorsId='product.colorId'
      :currentColor.sync='currentProductColor'
      v-model="currentProductColor"
      class="colors--black"/>
    </li>

</template>

<script>
import baseColors from './baseColors.vue';

export default {
  components: { baseColors },
  data() {
    return {
      currentProductColor: this.product.colorId[0],
    };
  },
  props: ['product'],
};
</script>

<style scoped>

</style>
