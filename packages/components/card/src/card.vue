<template>
    <div
    class="ce-card_wrap"
    :class="{'ce-card_shadow': shadow}"
    :style="cardStyle"
  >
    <div v-if="title" class="ce-card_header">{{ title }}</div>
    <div v-else-if="$slots&&$slots.header" class="ce-card_header">
      <slot name="header" />
    </div>
    <div class="ce-card_body">
      <slot />
    </div>
    <div v-if="footer" class="ce-card_footer">{{ footer }}</div>
    <div v-else-if="$slots&&$slots.footer" class="ce-card_footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { CSSProperties, defineComponent } from 'vue';
import { CardProps } from './props'

export default defineComponent({
  name: "CeCard",
  props: CardProps,
  setup(props) {
    const { shadow, border, padding, paddingTop, paddingLeft, paddingBottom, paddingRight, title, footer } = props

    const turnPropToStyle = (str: string | number | undefined): string | undefined => {
      if (!str) {
        return undefined
      }
      return typeof str === 'string' ? str : str + 'px'
    }
    const pd = turnPropToStyle(padding)
    const pt = turnPropToStyle(paddingTop)
    const pl = turnPropToStyle(paddingLeft)
    const pb = turnPropToStyle(paddingBottom)
    const pr = turnPropToStyle(paddingRight)
    const cardStyle:CSSProperties = {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: border,
    }
    if (pb || pd) {
      cardStyle.paddingBottom =  pb || pd
    }
    if (pl || pd) {
      cardStyle.paddingLeft =  pb || pd
    }
    if (pr || pd) {
      cardStyle.paddingRight =  pb || pd
    }
    if (pt || pd) {
      cardStyle.paddingTop =  pb || pd
    }

    return {
      shadow,
      border,
      cardStyle,
      title,
      footer
    }
  }
})
</script>
