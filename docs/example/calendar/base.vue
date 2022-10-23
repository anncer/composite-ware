<template>

  <ce-calendar @click="handelDay"></ce-calendar>

</template>
<script setup lang="ts">

const handelDay = (item) => {
  console.log(item)
}
</script>
