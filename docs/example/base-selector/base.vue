<template>
  <div>
    <ce-baseSelector
      :stripe="true"
      @select="handleSelect"
    ></ce-baseSelector>
  </div>
</template>

<script setup lang="ts">

const handleSelect = (section) => {
  console.log(section)
}
</script>
