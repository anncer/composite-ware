<template>

  <ce-title title="标题"></ce-title>

  <ce-title :title="t"></ce-title>

  <ce-title :box-style="{border:'1px solid #eee', borderRadius: '4px'}">标题</ce-title>

</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
let t: any = ref('title1' )

setTimeout(() => {
  t.value = 'title2'
}, 2000);
</script>
