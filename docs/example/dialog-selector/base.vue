<template>
  <div>
    <el-button ref="refButton" @click="handleClick">显示搜索器</el-button>
    <ce-dialogSelector :stripe="true" :multiple="false" :show="show" width="60%" @closed="handleClosed" :query="query">
    </ce-dialogSelector>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const show = ref(false)
const handleClick = () => {
  show.value = true
}
const query = [
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
    url: '/api/admin/user/query',
    method: "post",
    headers: {
      "ESP-TOKEN": 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiI5YVFkUmVkZFdGd1laVnp6UERkeEZEK3BPZjRUazJVQ2lMSjU5bFNDQnRTZzc4M2RJaTgrUmQ1UVN6bzl4ZFo2TG9pUDJXRGtObHJmXG4zbUNlOGt1ekhlZVk3NlZiMm9WcmhCQ3pVQkRkZGJZPSIsInN1YiI6ImFkbWluIiwiZXhwIjoxNjYxMjczNjk3LCJpYXQiOnsieWVhciI6MjAyMiwibW9udGhWYWx1ZSI6OCwibW9udGgiOiJBVUdVU1QiLCJkYXlPZk1vbnRoIjoyMywiZGF5T2ZZZWFyIjoyMzUsImRheU9mV2VlayI6IlRVRVNEQVkiLCJob3VyIjoxOSwibWludXRlIjo1NCwic2Vjb25kIjo1NywibmFubyI6MzYwMDAwMDAwLCJjaHJvbm9sb2d5Ijp7ImNhbGVuZGFyVHlwZSI6Imlzbzg2MDEiLCJpZCI6IklTTyJ9fSwianRpIjoiMzQ3ZTk4NGYtOGNlYy00OTRjLTk2YzctNDZiNzZmMjBlM2Q5In0.Zu4alUf5XXnuyAaxpU5ii9PyHONybHP_CtHGtHqjUpxu-eIZ1-LM4dUAEKwyMSpLaP8JHxZf2PLygdeKeVozYQ'
    }
  },
]


const columns2 = [
    {
      label: '姓名',
      code: 'fullName'
    },
    {
      label: '组织机构',
      code: 'deptName'
    },
    {
      label: '用工类型',
      code: 'empTypeName',
    },
    {
      label: 'ERP编号',
      code: 'erpNo'
    }
  ]
const refButton:any = ref(null)
onMounted(() => {
  // const { disabled } = refButton
  // console.log(disabled, 'disabled')
  // console.log(refButton, 'refButton')
})

const handleClosed = () => {
  show.value = false
}
</script>
