import { PropType } from "vue"
import type { UnknownFunction, UnknownObject } from '../../types/index'

export const calendarProp = ({
  // 是否显示当天
  isToday: {
    default: true,
    type: Boolean
  },
  // 当前日期
  current: {
    default: new Date(),
    type: [Date, String]
  },
  // 是否显示按钮
  isButton: {
    default: true,
    type: Boolean
  },
  // 当月是否可选
  chosenothers:{
    default: false,
    type: Boolean
  },
  // 用户请求
  request: {
    type: Object as PropType<userRequest>
  }
})

export interface userRequest{
  url: string
  method?: string
  headers?: UnknownObject
  params?: UnknownObject,
  loading?: Boolean,
  formatter?: UnknownFunction
}

export interface todayProp {
  todayStr: String
  todayTime: Number
  todayDate: Date
  toYear: Number
  toMonth: Number
}

export interface currentProp {
  currentYear: Number
  currentMonth: Number
  currentStr: String
}

export interface listProp {
  string: String
  today: Boolean
  day: number
  type: String
  point?: Boolean
}
