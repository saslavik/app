<template>
  <span> {{ productsQty }} </span>
</template>

<script>
export default {
  computed: {
    productsQty() {
      const qty = this.$store.state.cartProducts.length;
      let qtyText = '';
      if (qty === 1) {
        qtyText = 'товар';
      } else if (qty < 5) {
        qtyText = 'товара';
      } else {
        qtyText = 'товаров';
      }
      return qtyText;
    },
  },
};
</script>
