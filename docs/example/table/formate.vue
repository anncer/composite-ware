<template>

  <ce-table :columns="columns" :data="list"  >

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
    renderDefault: (scope) => {
      return `<span style="color: green">姓名是：${scope.row.name}</span>`
    }
  },
  {
    label: "工号",
    code: 'code',
    renderSlot: () => {
      return `<span style="color: red">这是工号</span>`
    }
  },
  {
    label: "地址",
    code: 'address',
    formatter: (row, column, cellValue, index) =>{
      return `居住在：${cellValue}`
    }
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
  console.log(a,b,c, 'dd')
}
</script>
