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
    <ce-table :data="list" :columns="columns" @selection-change="handleSelectionChange">
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

<script lang="ts">
import { defineComponent, ref, reactive, watch, toRefs, mergeProps } from 'vue';
import { baseSelectorProps, baseSelectorEmits } from './props'
import { CeTable } from '@composite-ware/components/table'
import { useQueryParams, useSelectionChange, usePaginationEvents, useSetDefalutSelected } from './hooks'
import { IQuerys, IQueryProp  } from './props'
import type { Ref } from 'vue'

export default defineComponent({
  name: "CeBaseSelector",
  props: baseSelectorProps,
  components: { CeTable },
  emits: baseSelectorEmits,
  setup(props, {emit}) {

    const tableData:any = []
    const cacheData:any = []
    let oldSelection:any = {}
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

    const handleSelectionChange = (val:any) => {
      useSelectionChange(val)
    }

    const list = [
      {fullName: '张三', code: '123', deptName: '人事处', empTypeName: '北京市', erpNo: '111'},
      {fullName: '李四', code: '222', deptName: '信息处', empTypeName: '天津市', erpNo: '222'},
      {fullName: '王五', code: '312', deptName: '质量安全环保处', empTypeName: '上海市', erpNo: '333'},
      {fullName: '赵六', code: '423', deptName: '南京市', empTypeName: '南京市', erpNo: '444'},
      {fullName: '刘七', code: '512', deptName: '广州市', empTypeName: '广州市', erpNo: '555'},
    ]

    const selectionClazz = multiple?'ce-table-multiple':'ce-table-radio'
    const searchParamsOptions:any = reactive({})

    const {queryProps, isDef} = useQueryParams(query as IQuerys)
    console.log(queryProps, 'queryProps')
    console.log(isDef, 'isDef')

    const { handleConfirm, handleCancle, handleClosed } = usePaginationEvents(emit)

    console.log(query, 'query')

    return {
      multiple,
      isShow,
      title,
      width,
      queryProps,
      columns,
      list,
      tableData,
      selectionClazz,
      handleConfirm,
      handleCancle,
      handleClosed,
      searchParamsOptions,
      handleSelectionChange
    }
  }
})
</script>
