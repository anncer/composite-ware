<template>
  <div class="ce-base-selector">
    <div class="bi-params-line clearfix">
      <el-form
        ref="searchParams"
        :model="queryProps"
        :inline="true"
      >
        <el-form-item v-for="it in queryProps" :key="it.code" :label="it.label" :label-width="it.labelWidth || '90px'">
          <!-- <template v-if="it.type==='select'">
            <el-select v-model="it.value" placeholder="请选择" filterable clearable>
              <el-option
                v-for="opt in searchParamsOptions[it.code]"
                :label="opt[it.optLabel || 'label']"
                :value="opt[it.optValue || 'value']"
                :key="opt.partyCode"
              >
              </el-option>
            </el-select>
          </template>
          <template v-else> -->
            <el-input v-model="it.value" @change="handleChangeParams" clearable></el-input>
          <!-- </template> -->
        </el-form-item>
      </el-form>
    </div>
    <ce-table ref="refCeTable"
      :class="[multiple? 'is-multiple' : 'is-single']"
      :data="tableData"
      :stripe="stripe"
      :border="border"
      :columns="userColumns"
      @select="handleSelect"
      @select-all="handleSelectChange"

      :isPage="true"
      layout="prev, pager, next"
      :total="100"
      :currentPage="currentPage"
      :pageSize="pageSize"
      :background="true"
      @current-change="handleCurrentChange"
    >
      <template  #prev>
        <el-table-column :class-name="selectionClazz" type="selection" width="40" ></el-table-column>
      </template>
    </ce-table>

  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick, toRefs } from 'vue';
import type { Ref } from 'vue'
import { baseSelectorProps, baseSelectorEmits } from './props'
import { IQuerys } from './props'
import CeTable from '@composite-ware/components/table'
import { useChangeTableSelect, useMultipleSelectionChange,useSetCurrentSection, useSetEmitPlantArray } from './hooks/useSelectionHooks'
import { useGetData, useQueryParams, useGetDefaultSection } from './hooks/useApiHooks'
import { defalutColumns } from './constant'
import { isArray } from 'lodash';
import { UnknownArray } from '@composite-ware/components/types';

  defineOptions({
    name: 'CeBaseSelector',
  })

  const props = defineProps(baseSelectorProps)
  const emit = defineEmits(baseSelectorEmits)

  const { columns, multiple, defalutSelected, query, userParams } = props
  const { stripe , border } = toRefs(props)
  const formatter = userParams?.formatter
  const userColumns = columns || defalutColumns
  const refCeTable:any = ref(null)

  const defalutSection = defalutSelected || []

  // 数据的唯一key
  const key = props.rowKey
  // 当前选中项
  let currentSelection:unknown[] = []

  // 设置默认选中项
  if (defalutSection.length) {
    useGetDefaultSection(defalutSection)
      .then((res:any) => {
        const resdata = (formatter && formatter(res.data)) || res.data
        if (isArray(resdata)) {
          currentSelection = resdata
        }
        getPageData()
      })
  }

  const setCurrent = (data:UnknownArray) => {
    nextTick(() => {
      const table = refCeTable.value.getTableRef()
      useSetCurrentSection(currentSelection, data, table, key)
    })
  }

  const handleSelect = (section:any, row:any) => {
    handleSelectChange(section)
  }

  const handleSelectChange = (section:any) => {
    const table = refCeTable.value.getTableRef()
    if (!multiple) {
      currentSelection = useChangeTableSelect(section, table)
      emit('select', useSetEmitPlantArray(currentSelection))
    } else {
      currentSelection = useMultipleSelectionChange(section, tableData.value, currentSelection, key)
    }
  }

  // 获取表格数据相关
  const tableData:Ref<any[]> = ref([])
  const selectionClazz = multiple?'ce-table-multiple':'ce-table-radio'
  const searchParamsOptions:any = reactive({})

  const currentPage = ref(1)
  const pageSize = ref(10)
  const pageTotal = ref(0)

  const getPageData = () => {
    useGetData(userParams, {page: currentPage.value, size: pageSize.value})
      .then((res:any) => {
        const resdata = (formatter && formatter(res.data)) || res.data
        const {data, total} = resdata
        if (data && total) {
          tableData.value = data
          pageTotal.value = total * 1
          setCurrent(data)
        } else {
          console.error('[base-selector]: has not find fields data or total !')
        }
      })
  }

  const handleCurrentChange = (v:any) => {
    currentPage.value = v
    getPageData()
  }

  // 搜索相关
  const {queryProps, isDef, params } = useQueryParams(query as IQuerys)

  if (isDef) {
    getPageData()
  }

  console.log(query,isDef, params , 'query')

  const handleChangeParams = () => {
    // console.log(queryProps, 'queryProps')
    // getPageData()
    console.log('change')
  }

</script>
