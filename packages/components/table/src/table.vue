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
        v-for="(col,idx) in columns"
        :type="col.type"
        :key="'-columns-'+col.code"
      >
        <table-item :item="col"></table-item>
        <!-- <el-table-column
          :prop="col.code"
          v-bind="col"
        >
          <template v-if="!col.renderContext" #default="scope"></template>
          <template v-else #default="scope">
            <div v-html="col.renderContext(scope)"></div>
          </template>
        </el-table-column> -->
      </template>
      <slot></slot>
    </el-table>
    <div v-if="isPagination">
      <el-pagination v-on="paginationEvents" v-bind="paginationProps"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { tableProps, hasdProps, tableEmits, paginationKeys } from './default'
import { isEmpty, isProperty } from '@composite-ware/utils'
import type { ElTable } from 'element-plus'
import TableItem from './tableItem.vue'

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
        console.log(props[key],key, 'key')
        elProps[key] = props[key]
      }
    });

    console.log(paginationKeys, 'paginationKeys')
    paginationKeys.forEach(key => {
      if (props[key] !== undefined) {
        paginationProps[key] = props[key]
      }
    });
    let sty = {}

    if (!isEmpty(boxStyle)) {
      sty = boxStyle
    }

    const tableRef = ref<InstanceType<ElTable>>();

    // 返回表格的实例
    function getTableRef() {
        return tableRef;
    }

    const handleEmit = (r,...arg) => {
      emit(r, ...arg)
    }

    const tableEvents = {
      rowClick: (...args) => {
        handleEmit('row-click', ...args)
      },
      select: (...args) => {
        handleEmit("select", ...args)
      },
      selectAll: (selection) => {
        handleEmit("select-all", selection)
      },
      selectionChange: (...args) => {
        handleEmit("selection-change", ...args)
      },
      cellMouseEnter: (...args) => {
        handleEmit("cell-mouse-enter", ...args)
      },
      cellMouseLeave: (...args) => {
        handleEmit("cell-mouse-leave", ...args)
      },
      cellContextmenu: (...args) => {
        handleEmit("cell-contextmenu", ...args)
      },
      cellClick: (...args) => {
        handleEmit("cell-click", ...args)
      },
      cellDblclick: (...args) => {
        handleEmit("cell-dblclick", ...args)
      },
      rowClick: (...args) => {
        handleEmit("row-click", ...args)
      },
      rowContextmenu: (...args) => {
        handleEmit("row-contextmenu", ...args)
      },
      rowDblclick: (...args) => {
        handleEmit("row-dblclick", ...args)
      },
      headerClick: (...args) => {
        handleEmit("header-click", ...args)
      },
      headerContextmenu: (...args) => {
        handleEmit("header-contextmenu", ...args)
      },
      sortChange: (...args) => {
        handleEmit("sort-change", ...args)
      },
      filterChange: (...args) => {
        handleEmit("filter-change", ...args)
      },
      currentChange: (...args) => {
        handleEmit("current-change", ...args)
      },
      headerDragend: (...args) => {
        handleEmit("header-dragend", ...args)
      },
      expandChange: (...args) => {
        handleEmit("expand-change", ...args)
      },
    }

    const paginationEvents = {
      'update:current-page': (...args) => {
        handleEmit("update:current-page", ...args)
      },
      'update:page-size': (...args) => {
        handleEmit("update:page-size", ...args)
      },
      'size-change': (...args) => {
        handleEmit("size-change", ...args)
      },
      'current-change': (...args) => {
        handleEmit("current-change", ...args)
      },
      'prev-click': (...args) => {
        handleEmit("prev-click", ...args)
      },
      'next-click': (...args) => {
        handleEmit("next-click", ...args)
      },

    }
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
