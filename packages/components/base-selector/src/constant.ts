
export const baseUserServiceApi = "/api/admin-v2/user/page/or/list"
import { cookie } from '@composite-ware/utils/cache'
import { TableColumns } from '@composite-ware/components/table/src/default'
import { FormQueryProps } from './props'
import { isProperty } from '@composite-ware/utils'

export const defalutColumns:TableColumns = [
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

export const defaultQuery:FormQueryProps = [
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
    headers: {
      "ESP-TOKEN": cookie.get("ESP-TOKEN") || ""
    }
  },
]
