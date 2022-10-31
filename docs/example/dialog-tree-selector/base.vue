<template>
  <el-button @click="handleClick">显示搜索器</el-button>

  <ce-dialog-treeSelector  v-model="show" @confirm="handleSelected"></ce-dialog-treeSelector>

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
