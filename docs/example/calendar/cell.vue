<template>

  <ce-calendar @click="handelDay">
    <template #cell="{item}">
      <span>{{item.month+1}}-{{item.day}}</span>
    </template>
  </ce-calendar>

</template>
<script setup lang="ts">

const handelDay = (item) => {
  console.log(item)
}
</script>
