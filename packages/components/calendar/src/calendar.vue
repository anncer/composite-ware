<template>
  <div ref="calendarBox" shadow class="calendar-container">
    <div :class="['calendar-title',titleHeight>40 ? 'calendar-title-l': '']" >
      <!-- <span style="color:#0052CB;cursor: pointer;" @click="toRouteCare">行程关注</span> -->
      <i class="calendar-left el-icon-arrow-left" @click="handlePrev" />
      <span class="calendar-tit">{{ title }}</span>
      <!-- <i class="calendar-icon icon-add el-icon-circle-plus"/> -->
      <i class="calendar-right el-icon-arrow-right" @click="handleNext"/>
      <!-- <i v-if="!isToMonth" class="calendar-icon calendar-today" @click="handleToMonth">今</i> -->
    </div>
    <div class="calendar-head">
      <!-- :style="itemStyle"  -->
      <span v-for="it in titles" :key="it" class="calendar-cell">{{ it }}</span>
    </div>
    <div class="calendar-content">
      <!-- :style="itemStyle" -->
      <span
        v-for="it in list"
        :key="(it.string as string)"
        :class="{'other-month': it.type !=='current', today: it.today, 'calendar-point': it.point}"
        class="calendar-cell"
        @click.stop="handleDay(it.string)"
      >
       <!-- :style="cellCircle" -->
        <span class="calendar-inner">{{ it.day }}</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { listProp} from './prop'
defineOptions({
   name: "CeCalendar",
})

const title = ref("")
const titleHeight = ref(40)
const titles = ['日', '一', '二', '三', '四', '五', '六']
const list = ref<listProp[]>([])

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

// const init = () => {
//   this.setThisDay()
//   this.handleToMonth(today)
// }
</script>

