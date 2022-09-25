import { unref } from 'vue'
import { cloneDeep } from 'lodash'
import { UnknownObject, UnknownArray } from '@composite-ware/components/types'

export const useChangeTableSelect = (section:UnknownArray, table: any) => {
  if (!table || !table.value || !table.value.toggleRowSelection) {
    return
  }
  if (section.length > 1) {
    table.value.toggleRowSelection(section.shift(), false);
  }
  return table.value.getSelectionRows()
}

export const useSetCurrentSection = (section: UnknownArray, data: UnknownArray,table: any, key: string) => {
  if (!table || !table.value || !table.value.toggleRowSelection) {
    return
  }
  data.forEach((it:any) => {
    const has = useIsInArray(it, section, key)
    if (has) {
      table.value.toggleRowSelection(it, true);
    }
  })
}

export const useMultipleCompareSelection = (section: UnknownArray, origin: UnknownArray, key: string) => {
  const unSelected:UnknownArray = []
  origin.forEach((it:any) => {
    const has = useIsInArray(it, section, key)
    !has && (unSelected.push(it))
  })
  return unSelected
}

export const useMultipleSelectionChange = (section: UnknownArray, origin: UnknownArray, cache:UnknownArray, key: string) => {
  // 添加选中的数据到缓存中去
  const newarr:UnknownArray = useSetEmitPlantArray(cache)
  section.forEach((it:any) => {
    const has = useIsInArray(it, cache, key)
    if (!has) {
      newarr.push(useSetEmitPlantObj(it))
    }
  })
  const res:UnknownArray = []
  // 找到当前数据中选中的和未选中的
  const unSelected = useMultipleCompareSelection(section, origin, key)
  // 删除缓存中有的取消选中项
  newarr.forEach((it:any) => {
    const has = useIsInArray(it, unSelected, key)
    if (!has) {
      res.push(useSetEmitPlantObj(it))
    }
  })
  return res
}

export const useIsInArray = (obj: UnknownObject, arr: UnknownArray, key:string) => {
  return arr.filter((item:any) => { return item[key] === obj[key] }).length
}

export const useSetEmitPlantObj =  (it: UnknownObject ) => {
  return cloneDeep(unref(it))
}

export const useSetEmitPlantArray = (arr: UnknownArray ) => {
  const res:any = []
  arr.forEach((it:any) => {
    res.push(cloneDeep(unref(it)))
  })
  return res
}
