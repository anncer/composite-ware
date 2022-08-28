import Api from '@composite-ware/service'
import { isEmpty, isProperty } from '@composite-ware/utils';
import { reactive, ref } from 'vue'
import type { Ref } from 'vue'
import { IQuerys } from './props'
type emitFn = (event: string, ...args: any[]) => void

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
          url: it.url,
          method
        }
        if (it.headers) {
          reqParam.headers = it.headers
        }
        if (it.params) {
          reqParam.data = it.params
        }
        // reqs.push(Api.request(params))
      }
    })
  }
  Promise.all(reqs)
    .then(responseArr => {
      console.log(responseArr[0], 'responseArr')
    })
  return {queryProps, isDef}
}

export const useSelectionChange = (val: any) => {
      console.log(val, 'val')
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
