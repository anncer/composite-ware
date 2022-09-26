<template>
  <el-button @click="handleClick">显示搜索器</el-button>

  <ce-dialogSelector :stripe="true" :multiple="false" :show="show" width="60%" @cancel="handleClosed" @confirm="handleSelected" >
  </ce-dialogSelector>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)

const handleClick = () => {
  show.value = true
}

const handleClosed = () => {
  show.value = false
}

const handleSelected = (section) => {
  console.log(section)
  show.value = false
}
</script>
