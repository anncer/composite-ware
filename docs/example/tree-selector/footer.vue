<template>
  <div style="display:flex;">

    <ce-tree-selector :list="data" footer @confirm="handleConfirm"></ce-tree-selector>

    <ce-tree-selector ref="treeRef" :list="data">
      <template #footer>
        <el-button type="primary" @click="handleConfirm1">点这里确定</el-button>
        <el-button>点这里取消</el-button>
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

const treeRef = ref()
const handleConfirm = (data) => {
  console.log(data)
}
const handleConfirm1 = () => {
  const ref = treeRef.value.getTreeRef()
  console.log(ref && ref.getCheckedNodes())
}
</script>

