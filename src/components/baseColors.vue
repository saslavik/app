<template>
  <ul class="colors" :class="{'colors--black': itemColors}">
    <li class="colors__item" v-for="color in colors" :key="color.id">
      <label class="colors__label">
        <input
          class="colors__radio sr-only"
          type="radio"
          name="color"
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
  props: ['currentColor', 'itemColors'],
  data() {
    return {
      baseColor: 0,
      arrColors: this.itemColors || [],
    };
  },
  computed: {
    colors() {
      let filteredColors = colors;
      if (this.arrColors.length > 0) {
        filteredColors = filteredColors.filter((color) => this.arrColors.includes(color.id));
      }
      return filteredColors;
    },
  },
  watch: {
    baseColor() {
      this.$emit('update:currentColor', this.baseColor);
    },
  },
};
</script>
