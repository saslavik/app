<template>
  <div>
    <main-page v-if="currentPage === 'main'"/>
    <product-page v-else-if="currentPage === 'product'"/>
    <notfound-page v-else />
  </div>
</template>

<script>
import MainPage from './pages/MainPage.vue';
import NotfoundPage from './pages/NotfoundPage.vue';
import ProductPage from './pages/ProductPage.vue';

export default {
  name: 'App',
  data() {
    return {
      currentPage: 'main',
    };
  },
  components: { MainPage, ProductPage, NotfoundPage },
};
</script>
