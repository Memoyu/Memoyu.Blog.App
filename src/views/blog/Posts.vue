<template>
  <v-container>
    <v-main >
      <post-scroll-page></post-scroll-page>
    </v-main>
  </v-container>
</template>

<script>
import PostScrollPage from '@/components/post/PostScrollPage'
export default {
  name: 'Posts',
  data() {
    return {}
  },
  created() {},
  methods: {},
  components: {
    'post-scroll-page': PostScrollPage
  }
}
</script>
<style>
.v-main{
  padding: 0px;
}
.me-container {
  width: 960px;
}
</style>
