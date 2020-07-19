<template>
  <v-app-bar app color="white" elevate-on-scroll height="45">
    <!-- <v-toolbar-title class="toolbar-title" @click="GotoIndex">MemoyuBlog</v-toolbar-title> -->
     <v-btn
     text
     color="primary"
     to="/">Memoyu_Blog</v-btn>
    <v-spacer></v-spacer>
   <v-tabs
    optional
    light
    right
    active-class="activeIndex"
   >
    <v-tab
    to="/posts">Posts</v-tab>
    <v-tab
    to="/categories">Categories</v-tab>
    <v-tab
    to="/tags">Tags</v-tab>
    <v-tab>Other</v-tab>
   </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    activeIndex: String,
    simple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      model: 'Tags'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.toolbar-title{
  min-width: fit-content;
}
</style>>
