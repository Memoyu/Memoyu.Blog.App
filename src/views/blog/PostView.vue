<template>
  <v-container>
    <v-main>
      <div class="me-view-content">
        <markdown-editor :editor=postDetail></markdown-editor>
      </div>
    </v-main>
  </v-container>
</template>

<script>
import MarkdownEditor from '@/components/markdown/MarkdownEditor'
import { getPostDetail } from '@/api/post'

export default {
  name: 'PostView',
  created () {
    this.getPostDetail()
  },
  watch: {
    $route: 'getPostDetail'
  },
  data () {
    return {
      postDetail: {
        title: '',
        author: '',
        url: '',
        html: '',
        markdown: '',
        creationTime: '',
        category: {
          categoryName: '',
          displayName: ''
        },
        tags: [],
        previous: {
          title: '',
          url: ''
        },
        next: {
          title: '',
          url: ''
        }
      }
    }
  },
  components: {
    'markdown-editor': MarkdownEditor
  },
  methods: {
    getPostDetail () {
      const that = this
      var year = that.$route.params.year
      var month = that.$route.params.month
      var day = that.$route.params.day
      var name = that.$route.params.name
      var url = '/' + year + '/' + month + '/' + day + '/' + name
      getPostDetail(url).then(data => {
        Object.assign(that.postDetail, data.result)
        that.postDetail.markdown = data.result.markdown
      }).catch(error => {
        if (error !== 'error') {
          that.$store.commit('showSnackbar', '文章详情加载失败!')
        }
      })
    }
  }
}
</script>

<style scoped>
.me-container {
  width: 960px;
}
</style>
