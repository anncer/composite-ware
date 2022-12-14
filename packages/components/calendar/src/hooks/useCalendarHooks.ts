import { reactive } from 'vue'
import { todayProp, currentProp, listProp , resProp} from '../props'
import { isProperty } from '@composite-ware/utils';
import { parseTime } from '../utils'

// 取到的当天的日期，固定数据


// 当前显示的日期， 根据操作变化

export const setThisDay = (d?: string | Date) => {
  const _n = new Date()
  const date =  d ? typeof d === 'string' ?  new Date(d) : d : new Date(_n.getFullYear(), _n.getMonth(), _n.getDate())

  const current = reactive<currentProp>({
    year: date.getFullYear(),
    month: date.getMonth(),
    string: formateDay(date)
  })

  const today = reactive<todayProp>({
    string: formateDay(date),
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    date
  })
  return {current, today}
}

// 格式化年月
const formateMonth = (y:number, m: number, type?: Boolean ) => {
  const date = new Date(y, m)
  const year = date.getFullYear()
  const munth = date.getMonth() + 1
  return type ? year + '年' + munth + '月' :  year + '-' + munth
}

// 格式化年月日
export const formateDay = (date: any) => {
  return parseTime(date, '{y}-{m}-{d}')
}

// 获取某月一号是周几
const getWeekday = (year: number, month: number) => {
  const d = new Date(year, month, 1)
  return d.getDay()
}

// 获取某个月的天数
const getDays = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

const setCurrent = (d: Date | string, current: currentProp) => {
  const date =  d ? typeof d === 'string' ?  new Date(d) : d : new Date()
  current.year = date.getFullYear(),
  current.month = date.getMonth(),
  current.string = formateDay(date)
}

export const getCalendatPressMonth = (num: number, current: currentProp, today: todayProp) => {
  current.month = current.month as number + num
  current.string = formateMonth(current.year as number, current.month as number)
  return getCalendars(current, today)
}

export const getCalendarUseDate = (date: Date | string,current: currentProp, today: todayProp) => {
  setCurrent(date, current)
  return getCalendars(current, today)
}

// 获取某年某月的日历数据
const dataMap:any = {}
export const getCalendars = (current:currentProp, today: todayProp):resProp =>  {
  let list: listProp[] = []
  const y = current.year as number
  const m = current.month as number
  const title = formateMonth(y, m, true)
  const key = formateMonth(y, m)
  current.string = key
  const toMonth:boolean = current.year === today.year && current.month === today.month
  if (isProperty(dataMap, key)) {
    list = dataMap[key]
  } else {

    list = getMonthCalendarData(y, m, today)
    dataMap[key]  = list
  }
  return { list, title, toMonth }
}

// 把整月数据拆分成为周数据的二维数组
const setCalendarWeekList = (list:any) => {
  const res = []
  const len = Math.ceil(list.length / 7)
  // 把设置好的list分割成一行七个的二维数组，便于渲染，二层数组中一个数组就是一行
  for (let inx = len - 1; inx >= 0; inx--) {
    const arr = list.splice(7 * inx, 7)
    // 检测尾行，如果不够7个则补齐
    if (arr.length < 7) {
      const _len = 7 - arr.length
      for (let index = 0; index < _len; index++) {
        arr.push({ isCurrent: false, day: 0 })
      }
    }
    res.unshift(arr)
  }
  return res
}
//
const setCalendarList = (start: Date, end: Date, current: Date, today: todayProp) => {
  const y = start.getFullYear()
  const m = start.getMonth()
  const d = start.getDate()
  const DATETIMES = 7 * 6

  let index = 0

  const currentTime = current.getTime()
  const endTime = end.getTime()
  const list:listProp[] = []
  for (; index < DATETIMES; index++) {
    const date = new Date(y, m, d + index)
    const str = formateDay(date)
    const t = date.getTime()
    const isToday = str === today.string
    list.push({
      string: str,
      today: isToday,
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      type: currentTime > t ? 'prev' : endTime < t ? 'next' : 'current'
    })
  }
  return list
}

// 获取某月的整月数据, type为获取的数据类型，默认为获取整月的一维数组。true时为周日历的二维数组
const getMonthCalendarData = (year: number, month: number, today:todayProp, type?: Boolean, ) => {
  // 需要补全的天数
  const times = getWeekday(year, month)
  // 获取当月的天数
  const days = getDays(year, month)
  // 第一天的年月日
  const date = new Date(year, month, 1 - times)

  // 获取日历数据
  const list = setCalendarList(date,new Date(year, month, days), new Date(year, month, 1), today)
  return type ? setCalendarWeekList(list) : list
}

// const setItemHeight = () => {
//   const ref = this.$refs.calendarBox
//   const _height = this.height
//     ? this.height
//     : getCss(ref.$el, 'height')
//   const height = _height.split('px')[0]
//   const width = this.width ? this.width.split('px')[0]
//     : getCss(ref.$el, 'height').split('px')[0]
//   const titleHeight = height > 400 ? 66 : 44
//   this.titleHeight = titleHeight
//   const itemHeight = Math.floor((height - 10 - titleHeight - 20) / 8)
//   const w = Math.floor(0.142857 * (width - 40))

//   const circle = Math.min(itemHeight, w)

//   this.cellCircle = {
//     width: circle + 'px',
//     height: circle + 'px',
//     lineHeight: circle + 'px'
//   }
//   this.itemStyle = { height: itemHeight + 'px', lineHeight: itemHeight + 'px' }
// }

