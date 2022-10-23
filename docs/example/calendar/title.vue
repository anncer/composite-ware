<template>

  <ce-calendar ref="calendar">
    <template #header="{current, today}">
      <div>
        <el-button size="small" @click="selectDate3(current, today)">
          Previous year
        </el-button>
        <el-button size="small" @click="selectDate(-1)">
          Previous month
        </el-button>
        <span>{{current.year }} 年 {{current.month + 1}} 月</span>
        <el-button size="small" @click="selectDate(1)">
          Next month
        </el-button>
        <el-button size="small" @click="selectDate2(current, today)">
          Next year
        </el-button>
      </div>

    </template>
  </ce-calendar>

</template>
<script lang="ts" setup>
import { ref } from 'vue'

const calendar = ref()
const selectDate = (val: number) => {
  calendar.value.setPress(val)
}
const selectDate2 = (current: any, today:any) => {
  calendar.value.setDate(new Date(current.year + 1, current.month, today.day))
}

const selectDate3 = (current: any, today: any) => {
  calendar.value.setDate(new Date(current.year - 1, current.month, today.day))
}
</script>
