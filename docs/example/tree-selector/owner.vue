<template>
  <div >
    <el-button @click="handlepush">添加数据</el-button>

    <ce-tree-selector :list="data"></ce-tree-selector>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const data = ref([
  {
    name: 'Level one 1',
    children: [
      {
        name: 'Level two 1-1',
        children: [
          {
            name: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    name: 'Level one 2',
    children: [
      {
        name: 'Level two 2-1',
        children: [
          {
            name: 'Level three 2-1-1',
          },
        ],
      },
      {
        name: 'Level two 2-2',
        children: [
          {
            name: 'Level three 2-2-1',
          },
        ],
      },
    ],
  }
])
const handlepush = () => {
  if (data.value.length < 3) {
    data.value.push({
      name: 'Level one 3',
      children: [
        {
          name: 'Level two 3-1',
          children: [
            {
              name: 'Level three 3-1-1',
            },
          ],
        },
        {
          name: 'Level two 3-2',
          children: [
            {
              name: 'Level three 3-2-1',
            },
          ],
        },
      ],
    })
  }
}
</script>

