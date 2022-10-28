<template>

  <ce-table :columns="columns" :data="list" @row-click="rowClick" :select-on-indeterminate="false" >
    <el-table-column label="Operations">
      <template #default>
        <el-button size="small">Edit</el-button>
        <el-button size="small" type="danger" >Delete</el-button>
      </template>
    </el-table-column>
  </ce-table>

</template>

<script setup lang="ts">
const columns = [
  {
    label: "选择",
    code: '',
    type: "selection"
  },
  {
    label: "姓名",
    code: 'name',
    align: 'left',
  },
  {
    label: "工号",
    code: 'code',
  },
  {
    label: "地址",
    code: 'address',
  },
]
const list = [
  {name: '张三', code: '333', address: '北京市'},
  {name: '李四', code: '333', address: '天津市'},
  {name: '王五', code: '333', address: '上海市'},
  {name: '赵六', code: '333', address: '南京市'},
  {name: '刘七', code: '333', address: '广州市'},
]
const rowClick = (a,b,c) => {
  console.log(a,b,c)
}
</script>
