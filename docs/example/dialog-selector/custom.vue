<template>
  <el-button @click="handleClick">显示搜索器</el-button>

  <ce-dialogSelector v-model="show" @confirm="handleSelected">
    <template #footer="{ selection }">
      <div>
      </div>
    </template>
  </ce-dialogSelector>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)

const handleClick = () => {
  show.value = true
}

const handleSelected = (section) => {
  console.log(section)
}
</script>
