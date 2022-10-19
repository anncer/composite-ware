import Api from '@composite-ware/service'
import { isEmpty, isProperty } from '@composite-ware/utils';
import { reactive, ref } from 'vue'
import type { Ref } from 'vue'
import { FormQueryProps, BaseUserParamsProp } from '../props'
import { baseUserServiceApi } from '../constant'
import { UnknownArray } from '@composite-ware/components/types';
import { defaultQuery } from '../constant'

export const useApiService = (url: string, method: string = "GET", params?: Object) => {
  const reqParam:any = {
    url,
    method,
    ...params
  }
  return Api.request(reqParam)
}
// 从接口获取默认数据
export const useGetDefaultSection = (arr: UnknownArray ) => {
  return useGetData(undefined, {
      enabledPage: false,
      ids: arr,
      params: {}
    })
}

export const useGetData = (userParams: BaseUserParamsProp | undefined = {}, query?:object | undefined) => {
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
  console.log(query, 'query')
  const reqParams:any = { data: params || baseParams, loading: loading || true}
  query && (reqParams.data = Object.assign(reqParams.data, query))
  headers && (reqParams.headers = headers)
  return useApiService(path, userRequestMethod, reqParams)
}

export const useQueryParams = (query:FormQueryProps | undefined) => {
  const requestArr:any[] = []
  const params:any = reactive({})
  // is has default value
  let isDefalut = false
  const queryProps:Ref<FormQueryProps> = ref([])
  const useQuery = query || defaultQuery
  const queryApi:string[] = []
  useQuery.forEach(it => {
    if (isProperty(it, 'vlaue') && it.value) {
      isDefalut = true
    }
    params[it.code] = isProperty(it, 'value') ? it.value : ''
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
      queryApi.push(it.code)
      requestArr.push(useApiService(it.url, method, reqParam))
    }
  })
  console.log(params, 'params')
  if (requestArr.length) {
    Promise.all(requestArr)
      .then(responseArr => {
        responseArr.forEach((res, index) => {
          const code = queryApi[index]
          queryProps.value.forEach(q => {
            if (q.code === code) {
              const formatter = q?.formatter
              q.list = (formatter && formatter(res.data)) || res.data
            }
          });
        })
      })
  }
  return { queryProps, isDefalut, params }
}
