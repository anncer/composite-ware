import { PropType } from 'vue'
import { ITableColumns } from '@composite-ware/components/table/src/default'
import type { UnknownFunction, UnknownObject } from '../../types/index'
export interface IQueryProp {
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

export type IQuerys = Array<IQueryProp>

export interface dataProp {
  key: string
}

export interface IFieldsProp {
  name: string
  code: string
}
export interface IUserParamsProp {
  url?: string
  method?: string
  headers?: UnknownObject
  params?: UnknownObject,
  loading?: Boolean,
  fields?: IFieldsProp,
  formatter?: UnknownFunction
}
export const baseSelectorProps = ({
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
    type: Object as PropType<IUserParamsProp>
  },
  columns: {
    type: Array as PropType<ITableColumns>,
    require: true
  },
  multiple: {
    default: true,
    type: Boolean
  },
  query: {
    type: Array as PropType<IQuerys>
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
