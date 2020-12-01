<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар" @click.prevent="reduceAmount()">
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model.number="itemAmount">

    <button type="button" aria-label="Добавить один товар" @click.prevent="itemAmount++">
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: ['amount'],
  computed: {
    itemAmount: {
      get() {
        return this.amount;
      },
      set(value) {
        if (value >= 0) {
          this.$emit('update:amount', value);
        }
      },
    },
  },
  methods: {
    reduceAmount() {
      if (this.itemAmount > 0) this.itemAmount -= 1;
      else this.itemAmount = 0;
    },
  },
};
</script>
