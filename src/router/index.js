import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        component: r =>
          require.ensure([], () => r(require('@/views/Index')), 'index')
      },
      {
        path: '/posts',
        component: r =>
          require.ensure([], () => r(require('@/views/blog/Posts')), 'posts')
      },
      {
        path: '/postView/:year?/:month?/:day?/:name?',
        component: r =>
          require.ensure(
            [],
            () => r(require('@/views/blog/PostView')),
            'PostView'
          )
      },
      {
        path: '/categories',
        component: r =>
          require.ensure(
            [],
            () => r(require('@/views/blog/Categories')),
            'categories'
          )
      },
      {
        path: '/posts/category/:id',
        component: r =>
          require.ensure(
            [],
            () => r(require('@/views/blog/PostsForCategory')),
            'PostsForCategory'
          )
      },
      {
        path: '/tags',
        component: r =>
          require.ensure([], () => r(require('@/views/blog/Tags')), 'tags')
      },
      {
        path: '/posts/tag/:id',
        component: r =>
          require.ensure(
            [],
            () => r(require('@/views/blog/PostsForTag')),
            'PostsForTag'
          )
      },
      {
        path: '/other',
        component: r =>
          require.ensure([], () => r(require('@/views/blog/Other')), 'other')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
