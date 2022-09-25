<template>
  <div class="ce-table" :style="sty">
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
            <template  v-if="item && item.renderSlot" #header >
              <div v-html="renderHead(item)"></div>
            </template>

            <template v-if="item && !item.renderDefault" #default></template>
            <template v-else #default="scope">
              <div v-html="item.renderDefault(scope)"></div>
            </template>
        </el-table-column>
        </template>
      <slot></slot>
    </el-table>
    <el-pagination v-if="isPage" v-model:currentPage="currentPage" v-model:page-size="pageSize" :total="total" v-on="paginationEvents" v-bind="paginationProps"/>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose, toRefs, } from 'vue'
import { tableProps, tableEmits, paginationKeys, TableColumnProp, tablePropKeys, paginationEs } from './default'
import { isEmpty } from '@composite-ware/utils'
// import TableItem from './tableItem.vue'

  defineOptions({
    name: 'CeTable',
  })

  function renderHead(it: TableColumnProp) {
    return it.renderSlot && it.renderSlot()
  }

  const props = defineProps(tableProps)
  const emit = defineEmits(tableEmits.concat(paginationEs))

  const { columns, data, isPage,  boxStyle, currentPage, pageSize, total  } = toRefs(props)

  let elProps:any = {}
  let paginationProps:any = {}

  tablePropKeys.forEach(key => {
    if (props[key] !== undefined && props[key] !== "") {
      elProps[key] = props[key]
    }
  });

  paginationKeys.forEach(key => {
    if (props[key] !== undefined && props[key] !== "" && !['currentPage', 'total', 'pageSize'].includes(key)) {
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
