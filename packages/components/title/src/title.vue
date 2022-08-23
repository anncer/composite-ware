<template>
   <div class="ce-title"  :style="boxStyle">
      <i v-if="line" class="ce-title-line" :style="{borderLeft: lineColor}"></i>
      <span class="ce-title_text">{{title}}</span>
      <div v-if="$slots&&$slots.icon" class="ce-title_icons">
        <slot name="icon" />
      </div>
      <div v-if="$slots&&$slots.btns" class="ce-title_btns">
        <slot name="btns" />
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { TitleProps } from './props'

export default defineComponent({
  name: "CeTitle",
  props: TitleProps,
  setup(props) {
    const { line, height, fontSize, left, title, lineColor } = props

    const turnPropToStyle = (str: string | number ): string => {
      return typeof str === 'string' ? str : str + 'px'
    }

    const boxStyle = computed(() => {
      return { height: turnPropToStyle(height), fontSize: turnPropToStyle(fontSize), paddingLeft: turnPropToStyle(left) }
    })

    return {
      line,
      boxStyle,
      title,
      lineColor
    }
  }
})
</script>
