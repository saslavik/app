import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import ProductPage from '@/pages/ProductPage.vue';
import CartPages from '@/pages/CartPages.vue';

Vue.use(VueRouter);

const routes = [{ name: 'main', component: MainPage, path: '/' },
  { name: 'product', component: ProductPage, path: '/products/:id' },
  { name: 'cart', component: CartPages, path: '/cart' },
  { name: 'notFound', component: NotFoundPage, path: '*' }];

const router = new VueRouter({
  routes,
});

export default router;
