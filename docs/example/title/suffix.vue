<template>

  <ce-title title="标题" suffix-icon="CirclePlus" @suffix="handleTap"></ce-title>

  <ce-title title="标题">
    <template #suffix>
      <el-icon><Plus /></el-icon>
    </template>
  </ce-title>
</template>

<script setup lang="ts">

function handleTap ($event:Event) {
  console.log( $event)
}

</script>
