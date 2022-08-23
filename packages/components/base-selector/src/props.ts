import { PropType } from 'vue'
import { ITableColumns } from '@composite-ware/components/table/src/default'

export interface IQueryProps {
  code: string,
  label?: string,
  optValue?: string,
  optLabel?: string,
  url?: string,
  method?: 'get' | 'post' | 'delete' | 'patch',
  headers?: any,
  type: 'select' | 'input'
}

export type IQuerys = Array<IQueryProps>

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
  userSrc: {
    type: String,
    require: true
  },
  orgSrc: {
    type: String,
    require: true
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
    type: Array as PropType<IQuerys>,
    require: true
  }
}) as const

export const baseSelectorEmits = [
  'closed',
  'seelcted'
]
