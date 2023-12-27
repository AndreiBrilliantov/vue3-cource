<template>
  <div class="page__wrapper">
    <div
        v-for="pageNumber in totalPages"
        :key="page"
        class="page"
        :class="{
            'current-page': page === pageNumber
          }"
        @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-pagination-by-page',
  props: {
    page: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    }
  },
  methods: {
    changePage(pageNumber){
      this.$emit('update:page', pageNumber)
    }
  }
}
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
</style>