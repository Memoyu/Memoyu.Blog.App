import request from './api'

export function getTags() {
  return request({
    url: 'api/blog/tags',
    method: 'get'
  })
}
