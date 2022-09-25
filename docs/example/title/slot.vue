<template>

  <ce-title title="标题">
    <template #suffix>
      <el-icon><Plus /></el-icon>
    </template>
  </ce-title>

  <ce-title title="标题" :box-style="{border:'1px solid #eee', borderRadius: '4px'}">
    <template #btns>
      <el-button size="small" type="primary">按钮</el-button>
    </template>
  </ce-title>

</template>
