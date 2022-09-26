<template>
  <div>
    <ce-baseSelector
      :stripe="true"
      :multiple="true"
      :query="query"
      @select="handleSelect"
    ></ce-baseSelector>
  </div>
</template>

<script setup lang="ts">

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
  },
]
const def = ['513', '3362','6592', '7308' ]
const handleSelect = (section) => {
  console.log(section,section[0], 'section')
}
</script>
