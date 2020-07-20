import request from './api'

export function upload(formdata) {
  return request({
    headers: { 'Content-Type': 'multipart/form-data' },
    url: '/upload',
    method: 'post',
    data: formdata
  })
}
