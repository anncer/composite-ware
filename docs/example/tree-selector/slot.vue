
<template>
  <div>

    <ce-tree-selector ref="treeRef" :list="data">
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <a @click.stop="append(data)"> Append </a>
            <a style="margin-left: 8px" @click="remove(node, data)"> Delete </a>
          </span>
        </span>
      </template>
    </ce-tree-selector>
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


const append = (data) => {
}


const remove = (node, data) => {
}
</script>

