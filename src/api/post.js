import request from './api'

export function getPosts(page) {
  return request({
    url: 'api/blog/posts',
    method: 'get',
    params: {
      Page: page.page,
      Limit: page.limit
    }
  })
}
export function getPostDetail(url) {
  return request({
    url: 'api/blog/post',
    method: 'get',
    params: {
      url: url
    }
  })
}
