<template>
  <div :style="sty">
    <el-table
      ref="tableRef"
      :data="data"
      v-bind="elProps"
      v-on= tableEvents
    >
        <slot name="prev"></slot>
        <template
          v-for="item in columns"
          :type="item.type"
          :key="'-columns-'+item.code"
        >
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
      <slot></slot>
    </el-table>
    <div v-if="isPagination">
      <el-pagination v-on="paginationEvents" v-bind="paginationProps"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { tableProps, tableEmits, paginationKeys, IElKey } from './default'
import { isEmpty } from '@composite-ware/utils'
import TableItem from './tableItem.vue'


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
  "defaultSort",
]

export default defineComponent({
  name: 'CeTable',
  props: tableProps,
  emits: tableEmits,
  components: {
    TableItem
  },
  setup(props, { emit }) {
    const {columns, isPagination, data, boxStyle, height, stripe } = props

    let elProps:any = {}
    let paginationProps:any = {}

    tableKeys.forEach(key => {
      if (props[key] !== undefined) {
        elProps[key] = props[key]
      }
    });

    paginationKeys.forEach(key => {
      if (props[key] !== undefined) {
        paginationProps[key] = props[key]
      }
    });
    let sty = {}

    if (!isEmpty(boxStyle)) {
      sty = boxStyle
    }

    const tableRef = ref();

    // 返回表格的实例
    function getTableRef() {
        return tableRef;
    }

    const handleEmit = (r: string,...arg: any) => {
      emit(r, ...arg)
    }
    const tableEvents:any = {}

    const paginationEs = ["update:current-page", "update:page-size", 'size-change', 'current-change', 'prev-click', 'next-click']

    const paginationEvents:any = {}

    const makeEvents = (list: any[], enentProps: any) => {
      list.forEach(it => {
        enentProps[it] = (...args: any) => {
          handleEmit(it, ...args)
        }
      })
    }

    makeEvents(tableEmits, tableEvents)
    makeEvents(paginationEs, paginationEvents)
    console.log(columns, '11columns')
    return {
      elProps,
      sty,
      columns,
      isPagination,
      data,
      tableRef,
      getTableRef,
      tableEvents,
      paginationProps,
      paginationEvents
    }
  }
})
</script>
