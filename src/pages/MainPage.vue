<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>
    <div class="content__catalog">
      <product-filter :price-from.sync="filterPriceFrom"
      :price-to.sync="filterPriceTo"
      :category.sync="filterCategory"/>
      <section class="catalog">
        <product-list :products="products" />
        <base-pagination
        v-model='page'
        :productPerPage='productPerPage'
        :countProducts='countProducts'/>
      </section>
    </div>
  </main>
</template>

<script>
import productList from '@/components/productList.vue';
import basePagination from '@/components/basePagination.vue';
import productFilter from '@/components/productFilter.vue';
import axios from 'axios';

export default {
  components: {
    productList,
    basePagination,
    productFilter,
  },
  data() {
    return {
      page: 1,
      productPerPage: 6,
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategory: 0,
      color: 0,
      productsData: null,
    };
  },
  computed: {
    products() {
      return this.productsData ? this.productsData.items.map((product) => ({
        ...product,
        image: product.image.file.url,
      })) : [];
    },
    countProducts() {
      return this.productsData ? this.productsData.pagination.total : 0;
    },
  },
  methods: {
    loadProducts() {
      axios.get('https://vue-study.skillbox.ru/api/products', {
        params: {
          page: this.page,
          limit: this.productPerPage,
          categoryId: this.filterCategory,
          minPrice: this.filterPriceFrom,
          maxPrice: this.filterPriceTo,
        },
      })
        .then((response) => {
          this.productsData = response.data;
        });
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
    filterPriceFrom() {
      this.loadProducts();
    },
    filterPriceTo() {
      this.loadProducts();
    },
    filterCategory() {
      this.loadProducts();
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>
