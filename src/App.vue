<template>
  <component :is="currentPageComponent" :page-params="currentPageParams"
  @goToPage="(pageName, pageParams) => goToPage(pageName, pageParams)" />
</template>

<script>
import MainPage from './pages/MainPage.vue';
import NotfoundPage from './pages/NotfoundPage.vue';
import ProductPage from './pages/ProductPage.vue';

const routes = {
  main: MainPage,
  product: ProductPage,
};

export default {
  name: 'App',
  data() {
    return {
      currentPage: 'main',
      currentPageParams: {},
    };
  },
  methods: {
    goToPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    },
  },
  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || 'NotfoundPage';
    },
  },
  components: { MainPage, ProductPage, NotfoundPage },
};
</script>
