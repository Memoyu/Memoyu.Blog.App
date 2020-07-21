<template>
  <v-card
    min-height="400"
    elevation="2"
    :body-style="{ padding: '8px 18px' }"
  >
    <v-card-title>
      <v-icon>fas fa-lock</v-icon>
      <v-icon class="mr-1">mdi-shape</v-icon>
      <span class="headline font-weight-bold">分类</span>
    </v-card-title>
    <ul class="me-category-list">
      <li
        class="me-category-item"
        v-for="cate in categories"
        :key="cate.id"
      >
        <v-btn
          @click="category(cate.id)"
          color="primary"
        >{{cate.displayName}} ({{cate.count}})</v-btn>
      </li>
    </ul>
  </v-card>

</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    categories: Array
  },
  data () {
    return {}
  },
  methods: {
    category (id) {
      this.$router.push({ path: `/posts/category/${id}` })
    }
  }
}
</script>

<style scoped>
.me-category-list {
  list-style-type: none;
}
.me-category-item {
  display: inline-block;
  padding: 4px;
  font-size: 14px;
}
.me-category-item a:hover {
  text-decoration: underline;
}
</style>
