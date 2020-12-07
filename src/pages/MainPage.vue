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
      <product-filter :price-from.sync="filters.filterPriceFrom"
      :price-to.sync="filters.filterPriceTo"
      :category.sync="filters.filterCategory"
      :color.sync="filters.filterColor"/>
      <section class="catalog">
        <div v-if="productsLoadingFailed">Ошибка загрузки товаров......... :(
          <button @click.prevent="loadProducts">Попробовать еще раз</button>
        </div>
        <loaderAnimation v-if="productsLoading"></loaderAnimation>
        <product-list v-else :products="products" />
        <base-pagination
        v-model='page'
        :productPerPage='productPerPage'
        :countProducts='countProducts'/>
      </section>
    </div>
  </main>
</template>

<script>
import { API_BASE_URL } from '@/config';
import loaderAnimation from '@/components/loaderAnimation.vue';
import productList from '@/components/productList.vue';
import basePagination from '@/components/basePagination.vue';
import productFilter from '@/components/productFilter.vue';
import axios from 'axios';

export default {
  components: {
    productList,
    basePagination,
    productFilter,
    loaderAnimation,
  },
  data() {
    return {
      page: 1,
      productPerPage: 6,
      filters: {
        filterPriceFrom: 0,
        filterPriceTo: 0,
        filterCategory: 0,
        filterColor: 0,
      },
      productsData: null,
      productsLoading: false,
      productsLoadingFailed: false,
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
      this.productsLoading = true;
      this.productsLoadingFailed = false;
      clearTimeout(this.loadProductsTimer);
      this.loadProductsTimer = setTimeout(() => {
        axios.get(`${API_BASE_URL}/api/products`, {
          params: {
            page: this.page,
            limit: this.productPerPage,
            categoryId: this.filters.filterCategory,
            minPrice: this.filters.filterPriceFrom,
            maxPrice: this.filters.filterPriceTo,
            colorId: this.filters.filterColor,
          },
        })
          .then((response) => {
            this.productsData = response.data;
          })
          .catch(() => {
            this.productsLoadingFailed = true;
          })
          .then(() => {
            this.productsLoading = false;
          });
      }, 0);
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
    filters: {
      handler() {
        this.loadProducts();
      },
      deep: true,
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>
