<template>
  <div :style="sty" v-bind="elprops">
    <el-table ref="tableBox" >
      <slot name="expand"></slot>
      <el-table-column
        v-for="(col,idx) in columns"
        :type="col.type"
        :key="'-columns-'+code"
        :prop="col.code"
        v-bind="col"
      >
      </el-table-column>
      <slot></slot>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { tableProps, tableColumnEmits } from './default.ts'
import { isEmpty } from '@composite-ware/utils'

const tableKeys = [
  "height,",
  "maxHeight",
  "border",
  "stripe",
  "spanMethod",
  "rowClassName",
  "rowStyle",
  "cellClassName",
  "cellStyle",
  "headerRowClassName",
  "headerRowStyle",
  "headerCellClassName",
  "headerCellStyle",
  "defaultSort",
]

export default defineComponent({
  name: 'CeTableColumn',
  props: tableProps,
  setup(props) {
    console.log(props, 'props')

    const {columns, isPagination, data, minHeight, boxStyle } = props
    const elProps = {}
    tableKeys.forEach(key => {
      if (props[key]) {
        elProps[key] = props[key]
      }
    });
    // const boxStyle:css
    let sty = {}
    if (!isEmpty(boxStyle)) {
      sty = boxStyle
    }
  }
})

// defineOpitons({
//   name: 'CeTableColumn'
// })

// const props = defineProps(tableProps)
// console.log(props, 'props')
// const emit = defineEmits(tableColumnEmits)


</script>
