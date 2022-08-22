<template>
  <el-table-column
  :prop="item && item.code"
  v-bind="item"
  >
    <template v-if="item && !item.renderContext" #default></template>
    <template v-else #default="scope">
      <div v-html="item.renderContext(scope)"></div>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { tableItemProps } from './default'

export default defineComponent({
  name: "CeTableItem",
  props: tableItemProps,
  setup (props) {
    const { item } = props
    return {
      item
    }
  }
})
</script>

