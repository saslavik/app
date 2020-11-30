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
      <product-filter v-bind.sync="filter"/>
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
import products from '@/data/products';
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
  props: {

  },
  data() {
    return {
      page: 1,
      productPerPage: 6,
      filter: {
        priceFrom: 0,
        priceTo: 0,
        category: 0,
        color: 0,
      },
      productsData: null,
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;
      if (this.filter.priceFrom > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price >= this.filter.priceFrom,
        );
      }
      if (this.filter.priceTo > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price <= this.filter.priceTo,
        );
      }
      if (this.filter.category) {
        filteredProducts = filteredProducts.filter(
          (product) => product.categoryId === this.filter.category,
        );
      }
      if (this.filter.color) {
        filteredProducts = filteredProducts.filter(
          (product) => product.colorId.includes(this.filter.color),
        );
      }
      return filteredProducts;
    },
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
      axios.get(`https://vue-study.skillbox.ru/api/products?page=${this.page}&limit=${this.productPerPage}`)
        .then((response) => {
          this.productsData = response.data;
        });
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>
