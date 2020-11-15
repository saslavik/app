<template>
  <section class="catalog">
    <product-list :products="products()"/>
    <base-pagination  v-model='page' :productPerPage='productPerPage' :maxPages='maxPages()'/>
  </section>
</template>

<script>
import products from './data/products';
import productList from './components/productList.vue';
import basePagination from './components/basePagination.vue';

export default {
  name: 'App',
  components: {
    productList,
    basePagination,
  },
  data() {
    return {
      page: 1,
      productPerPage: 3,
    };
  },
  methods: {
    products() {
      const offset = (this.page - 1) * this.productPerPage;
      return products.slice(offset, offset + this.productPerPage);
    },
    maxPages() {
      return products.length / this.productPerPage;
    },
  },
};
</script>
