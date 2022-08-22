<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { baseSelectorProps } from './base-selector'
import { CeTable } from '@composite-ware/components/table/index'

export default defineComponent({
  name: "CeBaseSelector",
  props: baseSelectorProps,
  components: {}
})
</script>
