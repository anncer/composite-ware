
export const baseUserServiceApi = "/api/admin-v2/user/page/or/list"
import { cookie } from '@composite-ware/utils/cache'
import { TableColumns } from '@composite-ware/components/table/src/default'
import { FormQueryProps } from './props'

export const defalutColumns:TableColumns = [
  {
    label: '姓名',
    code: 'name',
    width: '100px'
  },
  {
    label: 'ERP编号',
    code: 'empNo'
  },
  {
    label: 'id',
    code: 'id'
  }
]

export const defaultQuery:FormQueryProps = [
  {
    code: 'name',
    type: 'input',
    label: '姓名：'
  },
  {
    code: 'org',
    type: 'select',
    label: "组织机构：",
    optLabel: 'name',
    optValue: 'code',
    value: "",
    url: '/api/admin-v2/org/children/3302',
    method: "get",
    headers: {
      "ESP-TOKEN": cookie.get("ESP-TOKEN") || ""
    }
  },
]
