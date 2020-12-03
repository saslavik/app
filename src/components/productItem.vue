<template>
    <li class="catalog__item" >
      <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id} }">
        <img :src="product.image" :alt="product.title">
      </router-link >

      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>

      <span class="catalog__price">
        {{ product.price | numberFormat }} ₽
      </span>
      <base-colors :colors='product.colors'
      :currentColor.sync='currentProductColor'
      v-model="currentProductColor"
      class="colors--black"/>
    </li>

</template>

<script>
import baseColors from '@/components/baseColors.vue';
import numberFormat from '@/helpers/numberFormat';

export default {
  components: { baseColors },
  filters: {
    numberFormat,
  },
  data() {
    return {
      currentProductColor: this.product.colors[0].id,
    };
  },
  props: ['product'],
};
</script>
