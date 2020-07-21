<template>
  <v-container>
    <v-main>
      <tag-card :tags="tags"></tag-card>
    </v-main>
  </v-container>
</template>

<script>
import TagCard from '@/components/tag/TagCard'
import { getTags } from '@/api/tag'
export default {
  name: 'Categories',
  created () {
    this.getTags()
  },
  data () {
    return {
      tags: []
    }
  },
  components: {
    'tag-card': TagCard
  },
  methods: {
    getTags () {
      const that = this
      getTags().then(data => {
        that.tags = data.result
      }).catch(error => {
        if (error !== 'error') {
          that.$store.commit('showSnackbar', '标签列表加载失败!')
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
