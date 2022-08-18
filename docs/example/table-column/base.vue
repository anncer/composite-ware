<template>
  <div>
    <ce-table-column :columns="columns" :data="list" >
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </ce-table-column>
  </div>
</template>

<script setup lang="ts">
const columns = [
  {
    label: "姓名",
    code: 'name',
    align: 'left',
    renderContext: (scope) => {
      console.log(scope.row.name, 'scope')
      return `<span>${scope.row.name}水水水水</span>`
    }
  },
  {
    label: "工号",
    code: 'code',
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
</script>
