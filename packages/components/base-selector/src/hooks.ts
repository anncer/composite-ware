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

export const useSingleSelectionChange = (section: any, table: any) => {
  if (section.length > 1) {
    table.value.toggleRowSelection(section.shift(), false); // 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
  }
  return table.value.getSelectionRows()
}

export const useMultipleSelectionChange = (val: any) => {
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
