import request from './api'

export function getPosts(url, page) {
  return request({
    url: url,
    method: 'get',
    params: page
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
