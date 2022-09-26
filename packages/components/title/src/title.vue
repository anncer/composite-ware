<template>
   <div class="ce-title"  :style="boxStyle">
      <i v-if="line" class="ce-title-line" :style="{borderLeft: lineColor}"></i>
      <div v-if="title" class="ce-title_text">{{title}}</div>
      <div v-if="$slots&&$slots.default" class="ce-title_text">
        <slot></slot>
      </div>
      <el-icon class="ce-title_suffix" size="18px" v-if="suffixIcon" @click="handleTap">
        <component :is="suffixIcon" />
      </el-icon>
      <div v-if="$slots&&$slots.suffix" class="ce-title_suffix">
        <slot name="suffix" />
      </div>
      <div v-if="$slots&&$slots.btns" class="ce-title_btns">
        <slot name="btns" />
      </div>
    </div>
</template>

<script lang="ts" setup>
import { TitleProps } from './props'

defineOptions({
   name: "CeTitle",
})
const props = defineProps(TitleProps)

const emits = defineEmits(['suffix'])
  const { line, title, lineColor, boxStyle } = props


  const handleTap = ($event:Event) => {
    emits('suffix', $event)
  }

</script>
