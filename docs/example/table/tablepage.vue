<template>

  <ce-table
    :columns="columns"
    :data="list"
    :isPage="true"
    layout="prev, pager, next"
    :total="pageTotal"
    :currentPage="currentPage"
    :pageSize="pageSize"
    @current-change="handleCurrentChange"
  >
    <el-table-column label="Operations">
      <template #default>
        <el-button size="small">Edit</el-button>
        <el-button size="small" type="danger" >Delete</el-button>
      </template>
    </el-table-column>

  </ce-table>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref(1)
const pageSize = ref(5)
const pageTotal = ref(20)

const handleCurrentChange = (v) => {
  currentPage.value = v
  getPageData()
}

const columns = [
  {
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
    formatter: (row, column, cellValue, index) =>{
      return `居住在：${cellValue}`
    }
  },
]
const data = [
  {name: '1', code: '1', address: '北京市'},
  {name: '2', code: '2', address: '天津市'},
  {name: '3', code: '3', address: '上海市'},
  {name: '4', code: '4', address: '南京市'},
  {name: '5', code: '5', address: '广州市'},
  {name: '6', code: '6', address: '北京市'},
  {name: '7', code: '7', address: '天津市'},
  {name: '8', code: '8', address: '上海市'},
  {name: '9', code: '9', address: '南京市'},
  {name: '10', code: '10', address: '广州市'},
  {name: '11', code: '11', address: '北京市'},
  {name: '12', code: '12', address: '天津市'},
  {name: '13', code: '13', address: '上海市'},
  {name: '14', code: '14', address: '南京市'},
  {name: '15', code: '15', address: '广州市'},
  {name: '16', code: '16', address: '北京市'},
  {name: '17', code: '17', address: '天津市'},
  {name: '18', code: '18', address: '上海市'},
  {name: '19', code: '19', address: '南京市'},
  {name: '20', code: '20', address: '广州市'},
]
const list = ref(data.slice(0, pageSize.value))
const getPageData = () => {
  list.value = data.slice((currentPage.value - 1 ) * pageSize.value, currentPage.value * pageSize.value)
}


</script>
