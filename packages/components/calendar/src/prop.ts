

export const calendarProp = ({

})

export interface todayProp {
  todayStr: String | null
  todayTime: Number | null
  todayDate: Date | null
  toYear: Number | null
  toMonth: Number | null
}

export interface currentProp {
  currentYear: Number | null
  currentMonth: Number | null
  currentStr: String | null
}

export interface listProp {
  string: String
  today: Boolean
  day: number
  type: String
  point?: Boolean
}
