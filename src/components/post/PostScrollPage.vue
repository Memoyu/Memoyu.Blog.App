<template>
  <scroll-page
    :loading="loading"
    :offset="offset"
    :no-data="noData"
    v-on:load="load"
  >
    <post-block
      v-for="p in postItems"
      :key="p.year"
      v-bind="p"
    ></post-block>
  </scroll-page>
</template>

<script>
import PostBlock from '@/components/post/PostBlock'
import ScrollPage from '@/components/common/ScrollPage'
import { GET_POST_LIST } from '@/store/action-types'
import { mapState, mapActions } from 'vuex'
import { getPosts } from '@/api/post'

export default {
  name: 'PostScrollPage',
  props: {
    offset: {
      type: Number,
      default: 100
    },
    url: String,
    page: {
      type: Object,
      default () {
        return {}
      }
    },
    query: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    // query: {
    //   handler () {
    //     this.noData = false
    //     this.postItems = []
    //     this.innerPage.page = 1
    //     this.getPostList()
    //   },
    //   deep: true
    // },
    // page: {
    //   handler () {
    //     debugger
    //     this.noData = false
    //     this.postItems = []
    //     this.innerPage = this.page
    //     this.getPostList()
    //   },
    //   deep: true
    // }
  },
  created () {
    this.getPostList()
  },
  data () {
    return {
      loading: false,
      noData: false,
      innerPage: this.page,
      postItems: []
    }
  },
  computed: {
    ...mapState(['postList'])
  },
  methods: {
    ...mapActions({ getPostListData: GET_POST_LIST }),
    load () {
      this.getPostList()
    },
    getPostList () {
      const that = this
      that.loading = true
      // 获取文章列表分页数据
      getPosts(that.url, that.innerPage).then(data => {
        const newPosts = data.result.item
        if (newPosts && newPosts.length > 0) {
          that.innerPage.page += 1
          newPosts.map(function(item, index, ary) {
            var inde = that.postItems.findIndex(function(
              value,
              index,
              arr
            ) {
              return value.year === item.year
            })
            if (inde > -1) {
              that.postItems[inde].posts.push(item.posts)
            } else {
              that.postItems.push(item)
            }
          })
          // that.postItems = that.postItems.concat(newPosts)
        } else {
          that.noData = true
        }
      })
        .catch(error => {
          if (error !== 'error') {
            that.$store.commit('showSnackbar', '文章列表加载失败!')
          }
        })
        .finally(() => {
          that.loading = false
        })
    }
  },
  components: {
    'post-block': PostBlock,
    'scroll-page': ScrollPage
  }
}
</script>

<style scoped>
.el-card {
  border-radius: 0;
}

.el-card:not(:first-child) {
  margin-top: 10px;
}
</style>
