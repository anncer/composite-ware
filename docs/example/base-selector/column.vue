<template>
  <div>
    <ce-baseSelector
      :query="query"
      :stripe="true"
      @select="handleSelect"
      :column="column"
    ></ce-baseSelector>
  </div>
</template>

<script setup lang="ts">
import { isProperty } from '../../src/utils/comment'
const query = [
  {
    code: 'name',
    type: 'input',
    label: '姓名：',
  },
  {
    code: 'deptId',
    type: 'select',
    label: "组织机构：",
    optLabel: 'name',
    optValue: 'id',
    url: '/api/admin-v2/org/children/3302',
    method: "get",
  },
]

const column = [
  {
    label: '姓名',
    code: 'name',
    minWidth: 100
  },
  {
    label: 'ERP编号',
    code: 'empNo',
    minWidth: 120
  },
  {
    label: '性别',
    code: 'sex',
    minWidth: '60px',
    formatter: (row, column, cellValue:any, index) =>{
      return cellValue && isProperty(cellValue, 'name') ? cellValue.name : cellValue
    }
  },
  {
    label: '组织机构',
    code: 'dept',
    minWidth: 180,
    formatter: (row, column, cellValue:any, index) =>{
      return cellValue && isProperty(cellValue, 'name') ? cellValue.name : cellValue
    }
  },
  {
    label: '科室',
    code: 'office',
    minWidth: 180,
    formatter: (row, column, cellValue:any, index) =>{
      return cellValue && isProperty(cellValue, 'name') ? cellValue.name : cellValue
    }
  },
]

const handleSelect = (section) => {
  console.log(section, 'section')
}
</script>
