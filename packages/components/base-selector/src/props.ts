import { PropType } from 'vue'
import { TableColumns } from '@composite-ware/components/table/src/default'
import type { UnknownFunction, UnknownObject } from '../../types/index'
export interface BaseQueryProp {
  code: string,
  type: 'select' | 'input'
  label?: string,
  labelWidth?: string | number,
  // 数据需要获取的值的key
  optValue?: string,
  // 数据需要显示的文字信息的key
  optLabel?: string,

  url?: string,
  method?: 'get' | 'post' | 'delete' | 'patch',
  headers?: UnknownObject,
  // 搜索选项的默认值，暂时不支持
  value?: any,
  // 在做数据请求时的请求内容
  params?: any,
  formatter?: UnknownFunction
}

export type BaseQuerys = Array<BaseQueryProp>

export interface BaseFieldsProp {
  name: string
  code: string
}
export interface BaseUserParamsProp {
  url?: string
  method?: string
  headers?: UnknownObject
  params?: UnknownObject,
  loading?: Boolean,
  fields?: BaseFieldsProp,
  formatter?: UnknownFunction
}
export const BaseSelectorProps = ({
  stripe: {
     default: true,
      type: Boolean
  },
  border: {
     default: false,
      type: Boolean
  },
  // 人员选择器接口的选项
  userParams: {
    type: Object as PropType<BaseUserParamsProp>
  },
  columns: {
    type: Array as PropType<TableColumns>,
    require: true
  },
  multiple: {
    default: true,
    type: Boolean
  },
  query: {
    type: Array as PropType<BaseQuerys>
  },
  defalutSelected: {
    type: Array as PropType<string[]>,
  },
  // 数据的唯一键，用于标识数据
  rowKey: {
    type: String,
    default: "id"
  }
}) as const

export const baseSelectorEmits = [
  'select'
]
