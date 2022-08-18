<template>
  <div :style="sty">
    <el-table ref="tableBox" :data="data" v-bind="elProps">
      <slot name="expand"></slot>
      <template
        v-for="(col,idx) in columns"
        :type="col.type"
        :key="'-columns-'+col.code"
      >
        <el-table-column
          :prop="col.code"
          v-bind="col"
        >
           <template v-if="!col.renderContext" #default="scope">
           </template>
           <template v-else #default="scope">
            <div v-html="col.renderContext(scope)"></div>
          </template>
        </el-table-column>
      </template>

      <slot></slot>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { tableProps, hasdProps } from './default'
import { isEmpty, isProperty } from '@composite-ware/utils'
type IElKey<T = typeof hasdProps> = keyof T
// type IElKeys<T = typeof hasdProps> = IElKey<T>[]
// type IElProps<T = typeof hasdProps> = {
//   [Key in IElKey<T>]: T[Key]
// }
const tableKeys:IElKey[] = [
  "height",
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
  "spanMethod",
  "rowClassName",
  "rowStyle",
  "cellClassName",
  "cellStyle",
  "headerRowClassName",
  "headerRowStyle",
  "headerCellClassName",
  "headerCellStyle",
  "defaultSort"
]
export default defineComponent({
  name: 'CeTableColumn',
  props: tableProps,
  setup(props) {
    const {columns, isPagination, data, boxStyle, height, stripe } = props
    let elProps:any = {}
    tableKeys.forEach(key => {
      if (props[key] !== undefined) {
        console.log(props[key],key, 'key')
        elProps[key] = props[key]
      }
    });
    let sty = {}
    if (!isEmpty(boxStyle)) {
      sty = boxStyle
    }
    return {
      elProps,
      sty,
      columns,
      isPagination,
      data,
    }
  }
})
</script>
