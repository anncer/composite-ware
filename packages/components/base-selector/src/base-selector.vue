<template>
  <div class="ce-base-selector">
    <div class="ce-params-line">
      <ce-item v-for="it in queryProps" :key="it.code" :label="it.label" :label-width="it.labelWidth || '90px'">
          <template v-if="it.type==='select'">
            <el-select v-model="searchParamsOptions[it.code]" @change="handleChangeParams" :placeholder="it.placeholder || '请选择'" filterable clearable>
              <el-option
                v-for="opt in it.list"
                :label="opt[it.optLabel || 'label']"
                :value="opt[it.optValue || 'value']"
                :key="opt.partyCode"
              >
              </el-option>
            </el-select>
          </template>
          <template v-else>
            <el-input v-model="searchParamsOptions[it.code]" @change="handleChangeParams" clearable></el-input>
          </template>
      </ce-item>
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
import { ref, onMounted, nextTick, toRefs, unref } from 'vue';
import type { Ref } from 'vue'
import { BaseSelectorProps, baseSelectorEmits } from './props'
import { FormQueryProps } from './props'
import CeTable from '@composite-ware/components/table'
import { useChangeTableSelect, useMultipleSelectionChange,useSetCurrentSection, useSetEmitPlantArray } from './hooks/useSelectionHooks'
import { useGetData, useQueryParams, useGetDefaultSection } from './hooks/useApiHooks'
import { defalutColumns } from './constant'
import { isArray } from 'lodash';
import { UnknownArray } from '@composite-ware/components/types';

  defineOptions({
    name: 'CeBaseSelector',
  })

  const props = defineProps(BaseSelectorProps)
  const emit = defineEmits(baseSelectorEmits)

  const { columns, multiple, defalutSelected, query, userParams } = props
  const { stripe , border } = toRefs(props)
  const formatter = userParams?.formatter
  const userColumns = columns || defalutColumns
  const refCeTable:any = ref(null)
  const defalutSection = defalutSelected || []

  // the only key of data
  const key = props.rowKey
  // current selection cache
  let currentSelection:unknown[] = []

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

  // get table data
  const tableData:Ref<Array<any>> = ref([])
  const selectionClazz = multiple?'ce-table-multiple':'ce-table-radio'

  const currentPage = ref(1)
  const pageSize = ref(10)
  const pageTotal = ref(0)

  // for search
  const {queryProps, params } = useQueryParams(query as FormQueryProps)

  const searchParamsOptions = params || null

  // api
  const getPageData = () => {
    const query:any = {page: currentPage.value, size: pageSize.value}
    if (searchParamsOptions) {
      // if prop has no value, delete prop, null or '' is no value
      const p:any = {}
      for (const key in searchParamsOptions) {
        if (Object.prototype.hasOwnProperty.call(searchParamsOptions, key)) {
          const v = searchParamsOptions[key];
          if (v !== null && v !== '') {
            p[key] = v
          }
        }
      }
      query.params = p
    }
    useGetData(userParams, query)
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

  // event
  const handleChangeParams = () => {
    console.log(searchParamsOptions, 'searchParamsOptions')
    currentPage.value = 1
    getPageData()
  }

  const handleCurrentChange = (v:any) => {
    currentPage.value = v
    getPageData()
  }

  // run page
  onMounted(() => {
    // set default selection
    if (defalutSection.length) {
      useGetDefaultSection(defalutSection)
        .then((res:any) => {
          const resdata = (formatter && formatter(res.data)) || res.data
          if (isArray(resdata)) {
            currentSelection = resdata
          }
          getPageData()
        })
    } else {
      getPageData()
    }
  })

</script>
