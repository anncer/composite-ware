<template>

    <ce-tree-selector @check="handleChange" :list="data">
    </ce-tree-selector>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
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

const handleChange = (node, selection) => {
  console.log(node, selection)
}
</script>

