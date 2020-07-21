<template>
  <v-container>
    <v-main>
      <category-card :categories="categories"></category-card>
    </v-main>
  </v-container>
</template>

<script>
import CategoryCard from '@/components/category/CategoryCard'
import { getCategories } from '@/api/category'
export default {
  name: 'Categories',
  created () {
    this.getCategories()
  },
  data () {
    return {
      categories: []
    }
  },
  components: {
    'category-card': CategoryCard
  },
  methods: {
    getCategories () {
      const that = this
      getCategories().then(data => {
        that.categories = data.result
      }).catch(error => {
        if (error !== 'error') {
          that.$store.commit('showSnackbar', '分类列表加载失败!')
        }
      })
    }
  }
}
</script>

<style>
.me-container {
  width: 960px;
}
</style>
