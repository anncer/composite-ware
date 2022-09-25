import Api from '@composite-ware/service'
import { isEmpty, isProperty } from '@composite-ware/utils';
import { reactive, ref } from 'vue'
import type { Ref } from 'vue'
import { IQuerys, IUserParamsProp } from '../props'
import { baseUserServiceApi } from '../constant'
import { UnknownArray } from '@composite-ware/components/types';

export const useApiService = (url: string, method: string = "GET", params?: Object) => {
  const reqParam:any = {
    url,
    method,
    ...params
  }
  return Api.request(reqParam)
}
// 从接口获取默认数据，待优化 TODO
export const useGetDefaultSection = (arr: UnknownArray ) => {
  return useGetData(undefined, {
      enabledPage: false,
      ids: arr,
      params: {}
    })
}

export const useGetData = (userParams: IUserParamsProp | undefined = {}, query?:object | undefined) => {
  const { url, method, headers, params, loading} = userParams
  const userRequestMethod = method ? method : "post"
  const path: string = url ? url : baseUserServiceApi
  const baseParams = {
    enabledPage: true,
    page: 1,
    size: 10,
    ids: [],
    params: {}
  }
  const reqParams:any = { data: params || baseParams, loading: loading || true}
  query && (reqParams.data = Object.assign(reqParams.data, query))
  headers && (reqParams.headers = headers)
  return useApiService(path, userRequestMethod, reqParams)
}

export const useQueryParams = (query:IQuerys | undefined) => {
  const requestArr:any[] = []
  const params:any = {}
  // 是否有默认值
  let isDef = false
  const queryProps:Ref<IQuerys> = ref([])
  if (query) {
    query.forEach(it => {
      if (isProperty(it, 'vlaue') && it.value) {
        isDef = true
      }
      params[it.code] = isProperty(it, 'vlaue') ? it.value : ''
      queryProps.value.push(it)
      if (it.url) {
        const method = it.method?.toUpperCase() || 'GET'
        const reqParam:any = {
        }
        if (it.headers) {
          reqParam.headers = it.headers
        }
        if (it.params) {
          reqParam.data = it.params
        }
        requestArr.push(useApiService(it.url, method, reqParam))
      }
    })
  }
  // Promise.all(reqs)
  //   .then(responseArr => {
  //     console.log(responseArr[0], 'responseArr')
  //   })
  return { queryProps, isDef, params }
}
