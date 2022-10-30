<template>
  <el-button @click="handleClick">显示搜索器</el-button>

  <ce-dialog-treeSelector  v-model="show" :list="data" @confirm="handleSelected"></ce-dialog-treeSelector>

</template>
<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)

const data = ref([
  {
    name: 'Level one 1',
    id: 'Level one 1',
    children: [
      {
        name: 'Level two 1-1',
        id: 'Level two 1-1',
        children: [
          {
            name: 'Level three 1-1-1',
            id: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    name: 'Level one 2',
    id: 'Level one 2',
    children: [
      {
        name: 'Level two 2-1',
        id: 'Level two 2-1',
        children: [
          {
            name: 'Level three 2-1-1',
            id: 'Level three 2-1-1',
          },
        ],
      },
      {
        name: 'Level two 2-2',
        id: 'Level two 2-2',
        children: [
          {
            name: 'Level three 2-2-1',
            id: 'Level three 2-2-1',
          },
        ],
      },
    ],
  }
])

const handleClick = () => {
  show.value = true
}

const handleSelected = (section) => {
  console.log(section)
}
</script>
