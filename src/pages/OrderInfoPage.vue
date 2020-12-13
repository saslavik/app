<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{name: 'main'}" >
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{name: 'cart'}" >
            Корзина
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Оформление заказа
          </a>
        </li>
      </ul>

      <h1 class="content__title" v-if="orderInfo">
        Заказ оформлен <span>№ {{ orderInfo.id }}</span>
      </h1>
    </div>

    <section class="cart">
      <form v-if="orderInfo" class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <p class="cart__message">
            Благодарим за выбор нашего магазина. На Вашу почту придет письмо с деталями заказа.
            Наши менеджеры свяжутся с Вами в течение часа для уточнения деталей доставки.
          </p>

          <ul class="dictionary">
            <li class="dictionary__item" v-for="(item, index) in dictionary" :key="index">
              <span class="dictionary__key">
                {{ item.title }}
              </span>
              <span class="dictionary__value">
                {{ item.key }}
              </span>
            </li>
          </ul>
        </div>

        <div class="cart__block">
          <ul class="cart__orders">
            <li class="cart__order" v-for="item in orderInfo.basket.items" :key="item.product.id">
              <h3>{{ item.product.title }}</h3>
              <b>{{ item.product.price | numberFormat }} ₽</b>
              <span>Артикул: {{ item.product.id }}</span>
            </li>
          </ul>

          <div class="cart__total">
            <p>Доставка: <b>0 ₽</b></p>
            <p>Итого: <b>{{ orderInfo.basket.items.length }}</b>
            <cart-product-qty /> на сумму <b>{{ orderInfo.totalPrice | numberFormat }} ₽</b></p>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import numberFormat from '@/helpers/numberFormat';
import CartProductQty from '@/components/CartProductQty.vue';

export default {
  filters: {
    numberFormat,
  },
  components: { CartProductQty },
  methods: {
    getInfo() {
      if (this.$store.state.orderInfo && this.$store.state.orderInfo.id === this.$route.params.id) {
        return;
      }
      this.$store.dispatch('loadOrderInfo', this.$route.params.id);
    },
    getError() {
      this.$router.push({ name: 'notFound' });
    },
  },
  computed: {
    route() {
      return this.$route.params.id;
    },
    error() {
      return this.$store.state.orderInfoError;
    },
    ...mapGetters({ orderInfo: 'orderInfo' }),
    dictionary() {
      return [
        { title: 'Получатель', key: this.orderInfo.name },
        { title: 'Адрес доставки', key: this.orderInfo.address },
        { title: 'Телефон', key: this.orderInfo.phone },
        { title: 'Email', key: this.orderInfo.email },
        { title: 'Способ оплаты', key: 'картой при получении' },
      ];
    },
  },
  watch: {
    route: {
      handler() {
        this.getInfo();
      },
      immediate: true,
    },
    error: {
      handler() {
        this.getError();
      },
    },
  },
};
</script>
