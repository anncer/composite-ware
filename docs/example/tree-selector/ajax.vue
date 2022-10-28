<template>

    <ce-tree-selector :request="defaultRequest"></ce-tree-selector>

</template>
<script lang="ts" setup>
import { cookie } from '../../src/utils/cache'

const defaultRequest = {
  url: '/api/admin-v2/org/children/3302/3',
  method: 'get',
  headers: {
    "ESP-TOKEN": cookie.get("ESP-TOKEN") || ""
  },
  // 搜索条件
  // params: {},
  // 数据格式化
  formatter: (data) =>  {
    return [data]
  }
}
</script>
