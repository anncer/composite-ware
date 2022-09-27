
import Api from '@composite-ware/service'

export const loginToken = () => {
  return Api.request({
    url: '/api/admin/auth/loginByUsername',
    method: 'get',
    params: { username: "xu_kun" }
  })
}
