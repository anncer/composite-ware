import { PropType } from "vue"
import type { UnknownFunction, UnknownObject } from '../../types/index'

export const calendarProp = ({
  // 当前日期
  date: {
    default: new Date(),
    type: [Date, String]
  },
  // 是否显示当天
  // isToday: {
  //   default: true,
  //   type: Boolean
  // },
  // 是否显示按钮
  icon: {
    default: true,
    type: Boolean
  }
})

export const calendarEmits = [
  'click',
  'prev',
  'next'
]


export interface userRequest{
  url: string
  method?: string
  headers?: UnknownObject
  params?: UnknownObject,
  loading?: boolean,
  formatter?: UnknownFunction
}

export interface todayProp {
  string: string
  year: number
  month: number,
  date: Date,
  day: number
}

export interface currentProp {
  year: number
  month: number
  string: string
}

export interface listProp {
  string: string
  today: boolean
  day: number
  year: number
  month: number
  type: string
  point?: boolean
}

export interface resProp {
  list: listProp[]
  title: string
  toMonth: boolean
}
