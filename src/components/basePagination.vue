<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
      class="pagination__link pagination__link--arrow"
      :class="{'pagination__link--disabled': page == 1}"
      href="#"
      aria-label="Предыдущая страница"
      @click.prevent="prevPage(page)">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" v-for="currentPage in maxPages" :key="currentPage">
      <a
      href="#"
      class="pagination__link"
      :class="{'pagination__link--current': page == currentPage}"
      @click.prevent="changePage(currentPage)">
        {{ currentPage }}
      </a>
    </li>
    <li class="pagination__item">
      <a
      class="pagination__link pagination__link--arrow"
      :class="{'pagination__link--disabled': page == maxPages}"
      href="#"
      aria-label="Следующая страница"
      @click.prevent="nextPage(page)">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'productPerPage', 'countProducts'],
  methods: {
    changePage(page) {
      this.$emit('paginate', page);
    },
    prevPage(page) {
      if (page > 1) this.$emit('paginate', page - 1);
    },
    nextPage(page) {
      if (page < this.maxPages) this.$emit('paginate', page + 1);
    },
  },
  computed: {
    maxPages() {
      return this.countProducts / this.productPerPage;
    },
  },
};
</script>
