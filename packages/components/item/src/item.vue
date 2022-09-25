<template>
  <div class="ce-item" :class="{'inline':isInline}" >
    <label v-if="label" class="ce-item_label" :style="labelStyle">{{ label }}</label>
    <div v-else-if="$slots&&$slots.label" class="ce-item_label">
      <slot name="label" />
    </div>
    <div class="ce-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { ItemProps } from './props'

export default defineComponent({
  name: "CeItem",
  props: ItemProps,
  setup(props) {
    const {  labelWidth, label, inline } = props
    const turnPropToStyle = (str: string | number | undefined): string | undefined => {
      if (!str) {
        return undefined
      }
      return typeof str === 'string' ? str : str + 'px'
    }
    const _labwid = turnPropToStyle(labelWidth)
    const isInline = ref(labelWidth !== undefined || inline)
    const labelStyle = computed(() => {
      return _labwid ? { width: _labwid } : {}
    });


    return {
      isInline,
      label,
      labelStyle,
    }
  }
})
</script>
