import Api from '@composite-ware/service'
import { isEmpty } from '@composite-ware/utils';
import { reactive } from 'vue'
import type { Ref } from 'vue'
type emitFn = (event: string, ...args: any[]) => void
import { IQuerys } from './props'
export const useQueryParams = (query:Ref<IQuerys> | undefined, searchParams: any, searchParamsOptions: any) => {
  const urls:any[] = []

    if (query && query.value && !isEmpty(query.value)) {
      query.value.forEach(q => {
        searchParams[q.code] = null
        if (q.url) {
          const method = q.method?.toUpperCase() || 'GET'
          const params:any = {
            url: q.url,
            method
          }
          if (q.headers) {
            params.headers = q.headers
          }
          urls.push(Api.request(params))
        }
      });
      Promise.all(urls)
        .then(responseArr => {
          responseArr
          console.log(responseArr[0], 'responseArr')
        })
      console.log(urls, 'urls')
    }
}

export const useSelectionChange = (val: any) => {

      // if (!val.length) {
      //   currentSelection = []
      //   oldSelection = {}
      // } else {
      // const ids:any[] = val.map((it:any)=> it.code)
      // const a = ids.filter(it => !oldSelection.includes(it))
      // console.log(a, 'aaa')
      // currentSelection = a
      // oldSelection = a
      // }

      // if (val.length > 1) {

      // } else {
      //   currentSelection = val
      // }
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
