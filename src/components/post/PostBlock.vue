<template>
  <div>
    <v-card-title>
      <span class="headline font-weight-bold">{{year}}</span>
    </v-card-title>
    <post-item
      v-for="p in posts"
      :key="p.url"
      v-bind="p"
    ></post-item>
  </div>
</template>

<script>
import PostItem from '@/components/post/PostItem'
export default {
  name: 'PostBlock',
  props: {
    year: Number,
    posts: Array
  },
  data () {
    return {}
  },
  methods: {},
  components: {
    'post-item': PostItem
  }
}
</script>

<style scoped>
.v-card__title {
  padding: 0px 30px;
}
</style>
