<template>
  <el-table-column
  :prop="item.code"
  v-bind="item"
  >
    <template v-if="!item.renderContext" #default="scope"></template>
    <template v-else #default="scope">
      <div v-html="item.renderContext(scope)"></div>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { tableItemProps } from './default'
console.log(tableItemProps, 'tableItemProps')
export default defineComponent({
  name: "CeTableItem",
  props: tableItemProps,
  setup (props) {
    const { item } = props
    return {
      item,
    }
  }
})
</script>

