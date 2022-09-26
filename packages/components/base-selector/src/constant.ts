
export const baseUserServiceApi = "/api/admin-v2/user/page/or/list"
import { TableColumns } from '@composite-ware/components/table/src/default'
import { BaseQuerys } from './props'
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

export const defaultQuery:BaseQuerys = [
  {
    code: 'name',
    type: 'input',
    label: '姓名：'
  },
  {
    code: 'org',
    type: 'select',
    label: "组织机构：",
    optLabel: 'deptName',
    optValue: 'deptCode',
    value: "",
    url: '/api/admin-v2/org/children/3302',
    method: "get",
    headers: {
      "ESP-TOKEN": 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiI5YVFkUmVkZFdGd1laVnp6UERkeEZEK3BPZjRUazJVQ2lMSjU5bFNDQnRTZzc4M2RJaTgrUmQ1UVN6bzl4ZFo2TG9pUDJXRGtObHJmXG4zbUNlOGt1ekhlZVk3NlZiMm9WcmhCQ3pVQkRkZGJZPSIsInN1YiI6ImFkbWluIiwiZXhwIjoxNjYxMjczNjk3LCJpYXQiOnsieWVhciI6MjAyMiwibW9udGhWYWx1ZSI6OCwibW9udGgiOiJBVUdVU1QiLCJkYXlPZk1vbnRoIjoyMywiZGF5T2ZZZWFyIjoyMzUsImRheU9mV2VlayI6IlRVRVNEQVkiLCJob3VyIjoxOSwibWludXRlIjo1NCwic2Vjb25kIjo1NywibmFubyI6MzYwMDAwMDAwLCJjaHJvbm9sb2d5Ijp7ImNhbGVuZGFyVHlwZSI6Imlzbzg2MDEiLCJpZCI6IklTTyJ9fSwianRpIjoiMzQ3ZTk4NGYtOGNlYy00OTRjLTk2YzctNDZiNzZmMjBlM2Q5In0.Zu4alUf5XXnuyAaxpU5ii9PyHONybHP_CtHGtHqjUpxu-eIZ1-LM4dUAEKwyMSpLaP8JHxZf2PLygdeKeVozYQ'
    }
  },
]
