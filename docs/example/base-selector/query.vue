<template>
  <div>
    <ce-baseSelector
      :query="query"
      :stripe="true"
      @select="handleSelect"
    ></ce-baseSelector>
  </div>
</template>

<script setup lang="ts">
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
const handleSelect = (section) => {
  console.log(section)
}
</script>
