import Api from '@composite-ware/service'
import { isEmpty, isProperty } from '@composite-ware/utils';
import { reactive, ref } from 'vue'
import type { Ref } from 'vue'
import { IQuerys, IUserParamsProp } from './props'
type emitFn = (event: string, ...args: any[]) => void

const baseUserServiceApi = "/api/admin-v2/user/page/or/list"

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

export const useUserDataByPage = (page:number, size:number) => {
  return useGetData(undefined, {page, size})
}

export const useApiService = (url: string, method: string = "GET", params?: Object) => {
  const reqParam:any = {
    url,
    method,
    ...params
  }
  console.log(reqParam, 'reqParam')
  return Api.request(reqParam)
}

export const useQueryParams = (query:IQuerys | undefined) => {
  const reqs:any[] = []
  const queryProps:Ref<IQuerys> = ref([])
  let isDef = false
  if (query) {
    query.forEach(it => {
      if (!isProperty(it, 'vlaue')) {
        it.value = ''
        isDef = true
      }
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
        // http://10.28.89.10:8765/api/admin-v2/user/page/or/list
        // reqs.push(useApiService(url, method, reqParam))
      }
    })
  }
  Promise.all(reqs)
    .then(responseArr => {
      console.log(responseArr[0], 'responseArr')
    })
  return {queryProps, isDef}
}

export const useSingleSelectionChange = (section: any, table: any) => {
  if (section.length > 1) {
    table.value.toggleRowSelection(section.shift(), false); // 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
  }
  return table.value.getSelectionRows()
}

export const useMultipleSelectionChange = (val: any, cacheMultipleSelection:any, key: string) => {
  const n:any = []
  val.forEach((v:any) => {
    const isHas = cacheMultipleSelection.filter((item:any) => { return item[key] === v[key]}).length;
    if (isHas === 0) {
      n.push(v)
    }
  });
  return n
}

export const usePaginationEvents = (emit: emitFn) => {
  return {
    handleConfirm: () => {
      console.log('confirm')
    },

    handleCancle: () => {
      console.log('handleCancle')
    },

    handleClosed: () => {
      console.log('handleClosed')
      emit('closed', false)
    }
  }
}

export const useSetDefalutSelected = (def: any[]) => {

}
