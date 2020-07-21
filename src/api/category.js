import request from './api'

export function getCategories() {
  return request({
    url: 'api/blog/categories',
    method: 'get'
  })
}
