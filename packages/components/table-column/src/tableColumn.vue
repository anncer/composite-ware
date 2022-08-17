<template>
  <div style="min-height:365px">
    <el-table ref="tableBox" :data="list" :border="border" :span-method="spanMethod" :stripe="stripe" :height="height" @select="handleSelect"  @selection-change="handleSelectionChange">
      <!--  :render-header="labelHead" -->
      <slot name="expand"></slot>
      <el-table-column
        v-for="(col,idx) in columns"
        :type="col.type"
        :key="'-columns-'+idx"
        :prop="col.columnCode"
        :class-name="col.className || ''"
        :width="col.width?col.width: ''"
        :min-width="col.minWidth?col.minWidth: ''"
        :label="col.columnName"
        :align="col.formatType|| col.align  || 'center'"
        :show-overflow-tooltip="col.tooltip === undefined ? true : col.tooltip"
        :formatter="col.formatter || null"
      >
      </el-table-column>
      <slot></slot>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { baseSelectorProps, tableColumnEmits } from './tableColumn.ts'
defineOpitons({
  name: 'tableColumn'
})

const props = defineProps(baseSelectorProps)

const emit = defineEmits(tableColumnEmits)


</script>
