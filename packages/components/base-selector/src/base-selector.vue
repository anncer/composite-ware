<template>
<!-- class="rp-selector" -->
  <el-dialog
    v-model="isShow"
    :title='title'
    append-to-body
    :width="width"
    @close="handleClosed"
  >
    <el-row class="bi-params-line clearfix">
      <el-col :span="24">
        <el-form
          ref="searchParams"
          label-position="top"
          :model="queryProps"
          inline
          label-width="80px"
        >
        <el-form-item v-for="it in queryProps" :key="it.code" :label="it.label">
          <template v-if="it.type==='input'">
            <el-input v-model="it.value" clearable></el-input>
          </template>
          <template v-if="it.type==='select'">
            <el-select v-model="it.value" placeholder="请选择" filterable clearable>
              <el-option
               v-for="opt in searchParamsOptions[it.code]"
              :label="opt[it.optLabel || 'label']"
              :value="opt[it.optValue || 'value']"
              :key="opt.partyCode"></el-option>
            </el-select>
          </template>
        </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <ce-table ref="refCeTable" :data="tableData" @current-change="handleCurrentChange" layout="prev, pager, next" :total="15" :columns="columns" @select="handleSelecct">
      <template  #prev>
        <el-table-column :class-name="selectionClazz" type="selection" width="40" ></el-table-column>
      </template>
    </ce-table>
    <div slot="footer">
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
      <el-button @click="handleCancle">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, toRefs, onMounted } from 'vue';
import type { Ref } from 'vue'
import { baseSelectorProps, baseSelectorEmits } from './props'
import CeTable from '@composite-ware/components/table'
import { useQueryParams, useSingleSelectionChange, useMultipleSelectionChange, usePaginationEvents, useSetDefalutSelected } from './hooks'
import { IQuerys } from './props'

  defineOptions({
    name: 'CeBaseSelector',
  })
  const props = defineProps(baseSelectorProps)
  const emit = defineEmits(baseSelectorEmits)

  const key = props.prop.key
  const refCeTable:any = ref(null)

  // const tableData:any = []
  const cacheData:any = []
  let currentSelection:any = []
  let defaultSelection:any = []

  const { title,  show, width  } = toRefs(props)
  const { columns, multiple, defalutSelected, query } = props

  console.log(multiple, 'multiple')
  console.log(columns, 'columns')

  const isShow = ref(false)
  watch(show, (value) => {
    isShow.value = value
  })

  useSetDefalutSelected(defalutSelected as any[])

  const handleSelecct = (section:any) => {
    console.log(section, 'section')
    const table = refCeTable.value.getTableRef()
    if (!multiple) {
      currentSelection = useSingleSelectionChange(section, table)
    } else {
      currentSelection = useMultipleSelectionChange(section)
    }
    console.log(currentSelection, 'currentSelection')
  }

  const list = [
    {fullName: '张三', id: '01', deptName: '人事处', empTypeName: '北京市', erpNo: '111'},
    {fullName: '李四', id: '02', deptName: '信息处', empTypeName: '天津市', erpNo: '222'},
    {fullName: '王五', id: '03', deptName: '质量安全环保处', empTypeName: '上海市', erpNo: '333'},
    {fullName: '赵六', id: '04', deptName: '南京市', empTypeName: '南京市', erpNo: '444'},
    {fullName: '刘七', id: '05', deptName: '广州市', empTypeName: '广州市', erpNo: '555'},
    {fullName: 'tom', id: '06', deptName: '212', empTypeName: '深圳', erpNo: '666'},
    {fullName: 'tony', id: '07', deptName: '1111', empTypeName: '佛山', erpNo: '777'},
    {fullName: 'nancy', id: '08', deptName: '3333', empTypeName: '东莞', erpNo: '888'},
    {fullName: 'john', id: '09', deptName: '555', empTypeName: '江苏', erpNo: '999'},
    {fullName: 'black', id: '10', deptName: '777', empTypeName: '福州', erpNo: '1111'},
    {fullName: 'fox', id: '11', deptName: '888', empTypeName: '抚顺', erpNo: '2222'},
    {fullName: 'white', id: '12', deptName: '999', empTypeName: '唐山', erpNo: '3333'},
    {fullName: 'lucy', id: '13', deptName: 'xxx', empTypeName: '湖北', erpNo: '4444'},
    {fullName: 'lulu', id: '14', deptName: 'ddd', empTypeName: '海南', erpNo: '5555'},
    {fullName: 'marry', id: '15', deptName: 'eee', empTypeName: '广西', erpNo: '6666'},
  ]

  const tableData:Ref<any[]> = ref(list.slice(0,10))
  // let tableData = list.slice(0,10)
  const selectionClazz = multiple?'ce-table-multiple':'ce-table-radio'
  const searchParamsOptions:any = reactive({})

  const handleCurrentChange = (val:any) => {
    tableData.value = list.slice((val - 1 ) * 10, val* 10)
  }

  const {queryProps, isDef} = useQueryParams(query as IQuerys)

  const { handleConfirm, handleCancle, handleClosed } = usePaginationEvents(emit)

  console.log(query, 'query')

  onMounted(() => {
    console.log(refCeTable, 'refCeTable')
  })
</script>
