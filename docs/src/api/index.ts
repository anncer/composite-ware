
import Api from '@composite-ware/service'

export function getCrypto() {
  return Api.request({
    url: '/api/admin/auth/crypto',
    method: 'GET'
  })
}

export function loginToken(param:any) {
  return Api.request({
    url: '/api/admin/auth/login',
    method: 'POST',
    headers: { 'Authentication-Param': param }
  })
}

export function getUserInfo(token: string) {
  return Api.request({
    url: '/api/admin/auth/getUserInfo',
    method: 'get',
    params: { token }
  })
}
