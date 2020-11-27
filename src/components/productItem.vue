<template>
    <li class="catalog__item" >
      <a class="catalog__pic" href="#"
      @click.prevent="goToPage('product', {id: product.id})">
        <img :src="product.image" :alt="product.title">
      </a>

      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>

      <span class="catalog__price">
        {{ product.price | numberFormat }} ₽
      </span>
      <base-colors :colorsId='product.colorId'
      :currentColor.sync='currentProductColor'
      v-model="currentProductColor"
      class="colors--black"/>
    </li>

</template>

<script>
import baseColors from '@/components/baseColors.vue';
import goToPage from '@/helpers/goToPage';
import numberFormat from '@/helpers/numberFormat';
export default {
  components: { baseColors },
  filters: {
    numberFormat,
  },
  data() {
    return {
      currentProductColor: this.product.colorId[0],
    };
  },
  methods: {
    goToPage,
  },
  props: ['product'],
};
</script>
