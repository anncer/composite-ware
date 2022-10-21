<template>
  <div ref="calendarBox" shadow class="ce-calendar-container">
    <div :class="['ce-calendar-title',titleHeight>40 ? 'ce-calendar-title-l': '']" >
      <span class="ce-calendar-left" @click="handlePrev">
        <el-icon :size="20" ><ArrowLeftBold /></el-icon>
      </span>
      <span class="ce-calendar-text">{{ title }}</span>
      <span class="ce-calendar-right" @click="handleNext">
        <el-icon :size="20"><ArrowRightBold /></el-icon>
      </span>
      <!-- <i v-if="!isToMonth" class="ce-calendar-icon ce-calendar-today" @click="handleToMonth">今</i> -->
    </div>
    <div class="ce-calendar-head">
      <!-- :style="itemStyle"  -->
      <span v-for="it in titles" :key="it" class="ce-calendar-cell">{{ it }}</span>
    </div>
    <div class="ce-calendar-content">
      <!-- :style="itemStyle" -->
      <span
        v-for="it in list"
        :key="(it.string as string)"
        :class="{'ce-calendar-other': it.type !=='current', today: it.today, 'ce-calendar-point': it.point}"
        class="ce-calendar-cell"
        @click.stop="handleDay(it.string)"
      >
       <!-- :style="cellCircle" -->
        <span class="ce-calendar-inner">{{ it.day }}</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { setThisDay, getCalendars } from './hooks/useCalendarHooks'
defineOptions({
   name: "CeCalendar",
})

const titleHeight = ref(40)
const titles = ['日', '一', '二', '三', '四', '五', '六']

const handlePrev = () => {

}

const handleNext = () => {

}

const handleDay = (s: any) => {

}

// const resize = () => {
//   this.$nextTick(() => {
//     this.setItemHeight()
//   })
// }
// 判断如果传入具体日期，则显示今天，如果不传入则不显示，选择日期后则显示选择的那天
const {current, today} = setThisDay()
const {title, list} = getCalendars(current.currentYear as number, current.currentMonth as number, current, today)

</script>

