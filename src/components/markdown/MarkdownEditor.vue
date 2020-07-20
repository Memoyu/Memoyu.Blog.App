<template>
  <mavon-editor
    class="me-editor"
    ref="md"
    v-html="editor.html"
    @imgAdd="imgAdd"
    v-bind="editor"
    :boxShadow="false"
    :ishljs="true"
  >
  </mavon-editor>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { upload } from '@/api/post-admin'

export default {
  name: 'MarkdownEditor',
  props: {
    editor: Object
  },
  data () {
    return {}
  },
  mounted () {
    this.$set(this.editor, 'ref', this.$refs.md)
  },
  methods: {
    imgAdd (pos, $file) {
      const that = this
      const formdata = new FormData()
      formdata.append('image', $file)

      upload(formdata)
        .then(data => {
          // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
          if (data.code === 0) {
            that.$refs.md.$img2Url(pos, data.data.url)
          } else {
            that.$store.commit('showSnackbar', data.msg)
          }
        })
        .catch(err => {
          that.$store.commit('showSnackbar', err)
        })
    }
  },
  components: {
    mavonEditor
  }
}
</script>
<style scoped>
.me-editor {
  z-index: 6 !important;
}

.v-note-wrapper.fullscreen {
  top: 60px !important;
}
</style>
