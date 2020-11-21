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
      <product-filter
      :priceFrom.sync="filterPriceFrom"
      :priceTo.sync="filterPriceTo"
      :category.sync="filterCategoryId"
      :color.sync="filterColorId"/>
      <section class="catalog">
        <product-list :products="products"/>
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

export default {
  components: {
    productList,
    basePagination,
    productFilter,
  },
  data() {
    return {
      page: 1,
      productPerPage: 3,
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColorId: 0,
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;
      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price >= this.filterPriceFrom,
        );
      }
      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price <= this.filterPriceTo,
        );
      }
      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter(
          (product) => product.categoryId === this.filterCategoryId,
        );
      }
      if (this.filterColorId) {
        filteredProducts = filteredProducts.filter(
          (product) => product.colorId.includes(this.filterColorId),
        );
      }
      return filteredProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productPerPage;
      return this.filteredProducts.slice(offset, offset + this.productPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
  },
};
</script>
