<template>
  <div>
    <ce-table ref="tableRef123" :columns="columns" :data="list" @row-click="rowClick" :select-on-indeterminate="false" >
      <el-table label="Operations">
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
      </el-table>
    </ce-table>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
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
const tableRef123 = ref(null)
const rowClick = (a,b,c) => {
  console.log(a,b,c, 'dd')
}
onMounted(() => {

  const r1 = tableRef123.value.getTableRef()
  const r2 = tableRef123.value.tableRef
  console.log(r1 === r2, 'rrrrr')
  console.log(r1, 'r1');
  console.log(r2, 'r2');
});
</script>
