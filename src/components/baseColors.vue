<template>
  <ul class="colors">
    <li class="colors__item" v-for="color in filteredColors" :key="color.id">
      <label class="colors__label">
        <input
          class="colors__radio sr-only"
          type="radio"
          :value="color.id"
          v-model="baseColor"
        />
        <span
          class="colors__value"
          :style="{backgroundColor: color.color}"
        >
        </span>
      </label>
    </li>
  </ul>
</template>

<script>
import colors from '../data/colors';

export default {
  props: ['currentColor', 'colorsId'],
  computed: {
    colors() {
      return colors;
    },
    baseColor: {
      get() {
        return this.currentColor;
      },
      set(value) {
        this.$emit('update:currentColor', value);
      },
    },
    filteredColors() {
      let filteredColors = this.colors;
      if (this.colors.length !== this.colorsId.length) {
        filteredColors = filteredColors.filter((color) => this.colorsId.includes(color.id));
      }
      return filteredColors;
    },
  },
};
</script>