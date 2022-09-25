<template>
    <div
    class="ce-card_wrap"
    :class="{'ce-card_shadow': shadow}"
  >
    <div v-if="title" class="ce-card_header">{{ title }}</div>
    <div v-else-if="$slots&&$slots.header" class="ce-card_header">
      <slot name="header" />
    </div>
    <div class="ce-card_body" :style="bodyStyle">
      <slot />
    </div>
    <div v-if="footer" class="ce-card_footer">{{ footer }}</div>
    <div v-else-if="$slots&&$slots.footer" class="ce-card_footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { CardProps } from './props'

defineOptions({
  name: 'CeCard'
})

const props = defineProps(CardProps)

const { shadow, title, footer, bodyStyle } = toRefs(props)

</script>
