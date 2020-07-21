<template>
  <v-container>
    <v-main>
      <post-scroll-page
        url="api/blog/posts/tag"
        :page=this.innerPage
      ></post-scroll-page>
    </v-main>
  </v-container>
</template>

<script>
import PostScrollPage from '@/components/post/PostScrollPage'
export default {
  name: 'PostsForTag',
  created () {
    // const id = this.$route.params.id
  },
  data () {
    return {
      innerPage: {
        id: this.$route.params.id,
        page: 1,
        limit: 6
      }
    }
  },
  methods: {},
  components: {
    'post-scroll-page': PostScrollPage
  }
}
</script>
<style>
.v-main {
  padding: 0px;
}
.me-container {
  width: 960px;
}
</style>
