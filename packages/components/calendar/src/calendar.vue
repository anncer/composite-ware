<template>
  <div ref="calendarBox" shadow class="ce-calendar_container">
    <div v-if="$slots&&$slots.header" class="ce-calendar_header">
      <slot name="header" v-bind="{current, today }"></slot>
    </div>
    <div v-else class="ce-calendar_header" >
      <span v-if="icon" class="ce-calendar_left" @click="handlePrev">
        <el-icon :size="20" ><ArrowLeftBold /></el-icon>
      </span>
      <span class="ce-calendar_text">{{ calendarTitle }}</span>
      <span v-if="icon" class="ce-calendar_right" @click="handleNext">
        <el-icon :size="20"><ArrowRightBold /></el-icon>
      </span>
      <span v-if="!isToMonth" class="ce-calendar_icon" @click="handleToday">今</span>
    </div>
    <div class="ce-calendar_title">
      <span v-for="it in titles" :key="it" class="ce-calendar_cell">{{ it }}</span>
    </div>
    <div class="ce-calendar_content">
      <div
        v-for="it in data"
        :key="(it.string as string)"
        :class="{'ce-calendar_other': it.type !=='current', 'ce-calendar_today': it.today}"
        class="ce-calendar_cell ce-calendar_color"
        @click.stop="handleDay(it)"
      >
        <span v-if="$slots&&$slots.cell" class="ce-calendar_inner" >
          <slot name="cell" v-bind="{ item: it, current, today}"></slot>
        </span>
        <span v-else class="ce-calendar_inner">{{ it.day }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { setThisDay, getCalendars, getCalendatPressMonth, getCalendarUseDate } from './hooks/useCalendarHooks'
import { listProp, resProp, calendarProp, calendarEmits } from './prop'

defineOptions({
   name: "CeCalendar",
})

const props = defineProps(calendarProp)
const emit = defineEmits(calendarEmits)

const { icon, date } = props

const isToMonth = ref(false)
const titles = ['日', '一', '二', '三', '四', '五', '六']

const handlePrev = () => {
  setViewData(getCalendatPressMonth(-1, current, today))
  emit('prev', current)
}

const handleNext = () => {
  setViewData(getCalendatPressMonth(1, current, today))
}

const handleToday = () => {
  setViewData(getCalendarUseDate(today.date as Date, current, today))
  emit('next', current)
}

const handleDay = (item:listProp) => {
  emit('click', item)
}

const setViewData = (res:resProp) => {
  data.value = res.list
  calendarTitle.value = res.title
  isToMonth.value = res.toMonth
}

let data = ref<listProp[]>([])
let calendarTitle = ref("")
// 判断如果传入具体日期，则显示今天，如果不传入则不显示，选择日期后则显示选择的那天

const {current, today } = setThisDay(date)

setViewData(getCalendars(current, today))

const setDate = (date: Date) => {
  setViewData(getCalendarUseDate(date, current, today))
}

const setPress = (num: number) => {
  setViewData(getCalendatPressMonth(num, current, today))
}

defineExpose({
  setDate,
  setPress,
})
</script>
