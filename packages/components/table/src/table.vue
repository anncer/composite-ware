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
import { ref, toRefs,watch } from 'vue'
import { CeTableProps, tableEmits, paginationKeys, TableColumnProp, tablePropKeys, paginationEs } from './default'
import { isEmpty } from '@composite-ware/utils'

  defineOptions({
    name: 'CeTable',
  })

  function renderHead(it: TableColumnProp) {
    return it.renderSlot && it.renderSlot()
  }

  const props = defineProps(CeTableProps)
  const emit = defineEmits(tableEmits.concat(paginationEs))

  const { columns, data, isPage,  boxStyle, currentPage, pageSize, total  } = toRefs(props)
  let elProps:any = {}
  let paginationProps:any = {}

  const handBindProps = ['data','currentPage', 'total', 'pageSize']

  tablePropKeys.forEach(key => {
    if (props[key] !== undefined && props[key] !== "" && !handBindProps.includes(key)) {
      elProps[key] = props[key]
    }
  });

  paginationKeys.forEach(key => {
    if (props[key] !== undefined && props[key] !== "" && !handBindProps.includes(key)) {
      paginationProps[key] = props[key]
    }
  });

  let sty = {}
  if (!isEmpty(boxStyle)) {
    sty = boxStyle
  }

  const elTableRef:any = ref();

  // ?????????????????????
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
