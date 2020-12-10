import { mapGetters } from 'vuex';
import numberFormat from '@/helpers/numberFormat';
import CartItem from '@/components/CartItem.vue';
import CartProductQty from '../components/CartProductQty.vue';

export default {
  filters: {
    numberFormat,
  },
  components: {
    CartItem,
    CartProductQty,
  },
  computed: {
    ...mapGetters({ products: 'cartDetailProducts', totalPrice: 'cartTotalPrice' }),
  },
};
