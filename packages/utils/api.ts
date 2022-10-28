import Api from '@composite-ware/service'

export const useApiService = (url: string, method: string = "GET", params?: Object) => {
  const reqParam:any = {
    url,
    method,
    ...params
  }
  return Api.request(reqParam)
}
