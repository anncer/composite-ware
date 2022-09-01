<template>
  <div :style="sty">
    <el-table
      ref="elTableRef"
      :data="data"
      v-bind="elProps"
      v-on=tableEvents
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

<script lang="ts" setup>
import { ref, defineExpose, toRefs, watch, computed } from 'vue'
import { tableProps, tableEmits, paginationKeys, IElKey, paginationEs } from './default'
import { isEmpty } from '@composite-ware/utils'
// import TableItem from './tableItem.vue'

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

  defineOptions({
    name: 'CeTable',
  })
  const props = defineProps(tableProps)
  const emit = defineEmits(tableEmits)

  const { isPagination,  boxStyle, height, stripe } = props
  const { columns, data  } = toRefs(props)

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

  const elTableRef:any = ref();

  // 返回表格的实例
  function getTableRef() {
      return elTableRef;
  }

  const handleEmit = (r: string,...arg: any) => {
    emit(r, ...arg)
  }

  const tableEvents:any = {}

  const paginationEvents:any = {}

  const makeEvents = (list: any[], enentProps: any) => {
    list.forEach(it => {
      if (it === 'table-current') {
        enentProps['current-change'] = (...args: any) => {
          handleEmit(it, ...args)
        }
      }else {
        enentProps[it] = (...args: any) => {
          handleEmit(it, ...args)
        }
      }
    })
  }

  makeEvents(tableEmits, tableEvents)
  makeEvents(paginationEs, paginationEvents)

  defineExpose({
    elTableRef,
    getTableRef
  })
</script>
