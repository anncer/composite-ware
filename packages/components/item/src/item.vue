<template>
  <div class="ce-item" :class="{'inline':inline}" :style="boxLong">
    <label class="ce-item_label" :style="labelStyle">{{ label }}</label>
    <div class="ce-item_content" :style="contextStyle">
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
    const { width, height, labelWidth, label } = props
    const turnPropToStyle = (str: string | number | undefined): string | undefined => {
      if (!str) {
        return undefined
      }
      return typeof str === 'string' ? str : str + 'px'
    }
    const _labwid = turnPropToStyle(labelWidth)
    const _height = turnPropToStyle(height)
    const inline = ref(labelWidth !== undefined)

    const boxLong = computed(() => {
      return width ? { width: turnPropToStyle(width)} : {}
    });

    const labelStyle = computed(() => {
      return _labwid ? { width: _labwid, lineHeight: _height } : {}
    });

    const contextStyle = computed(() => {
      return _labwid ? { marginLeft: _labwid, lineHeight: _height } : { lineHeight: height }
    });

    return {
      boxLong,
      inline,
      label,
      labelStyle,
      contextStyle
    }
  }
})
</script>
