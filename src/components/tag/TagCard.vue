<template>
  <v-card
    min-height="400"
    elevation="2"
    :body-style="{ padding: '8px 18px' }"
  >
    <v-card-title>
      <v-icon class="mr-1">mdi-tag</v-icon>
      <span class="headline font-weight-bold">标签</span>
    </v-card-title>
    <ul class="me-tag-list">
      <li
        class="me-tag-item"
        v-for="t in tags"
        :key="t.id"
      >
        <v-btn
          @click="tag(t.id)"
          color="primary"
        >{{t.displayName}} ({{t.count}})</v-btn>
      </li>
    </ul>
  </v-card>

</template>

<script>
export default {
  name: 'TagCard',
  props: {
    tags: Array
  },
  data () {
    return {}
  },
  methods: {
    tag (id) {
      this.$router.push({ path: `/posts/tag/${id}` })
    }
  }
}
</script>

<style scoped>
.me-tag-list {
  list-style-type: none;
}
.me-tag-item {
  display: inline-block;
  padding: 4px;
  font-size: 14px;
}
.me-tag-item a:hover {
  text-decoration: underline;
}
</style>
