import { PropType } from 'vue'
import { ITableColumns } from '@composite-ware/components/table/src/default'

export interface IQueryProp {
  code: string,
  type: 'select' | 'input'
  label?: string,
  optValue?: string,
  optLabel?: string,
  url?: string,
  method?: 'get' | 'post' | 'delete' | 'patch',
  headers?: any,
  value?: any,
  params?: any
}

export type IQuerys = Array<IQueryProp>

// export interface IQueryPropsValue extends IQueryProps{
//   value: any
// }

// export type IQueryPropsValues = Array<IQueryPropsValue>

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
  headers?: Object
  params?: Object,
  loading?: Boolean,
  fields?: IFieldsProp
}
export const baseSelectorProps = ({
  show: {
    default: false,
    type: Boolean
  },
  title: {
    default: "选择器",
    type: String
  },
  label: {
    type: String,
    require: true
  },
  width: {
    default: '100%',
    type: String
  },
  // 人员选择器接口的选项
  userParams: {
    type: Object as PropType<IUserParamsProp>
  },
  // // 人员选择器接口的地址
  // userSrc: {
  //   type: String,
  // },

  // userRequestMethod: {
  //   type: String,
  //   default: "POST"
  // },
  // orgSrc: {
  //   type: String,
  //   require: true
  // },
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
    type: Array,
  },
  // 数据的唯一键，用于标识数据
  prop: {
    type: Object as PropType<dataProp>,
    default: () => ({ key: 'id' })
  }
}) as const

export const baseSelectorEmits = [
  'closed',
  'seelcted'
]
