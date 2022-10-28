<template>
  <div class="pro-code">
    <div class="source">
      <slot name="source" />
    </div>
    <div ref="meta" class="meta">
      <div v-if="$slots.description" class="description">
        <slot name="description" />
      </div>
      <div class="language-html">
        <slot name="code" />
      </div>
    </div>
    <button
      :class="{ 'is-fixed': isFixContorl }"
      class="control"
      @click="toggleShow"
    >
      <caret-top v-if="show" class="control-icon" />
      <caret-bottom v-else class="control-icon" />
      <span class="control-text">
        {{ show ? "隐藏代码" : "显示代码" }}
      </span>
      <div class="control-btn" @click.stop>
        <span v-if="isSupported">
          <document-copy
            role="button"
            class="btn-icon"
            @click="copy()"
            @keydown.enter="copy()"
          />
        </span>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useClipboard } from "@vueuse/core";
import {
  CaretTop,
  CaretBottom,
  DocumentCopy,
  VideoPlay
} from "@element-plus/icons-vue";
import { github } from "../utils/index";

const props = defineProps<{
  link: string;
  content: string;
}>();
// const { show, toggleShow } = useShow()
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const show = ref(false)

function toggleShow() {
  show.value = !show.value
}


const { isSupported, copied, copy } = useClipboard({
  source: decodeURIComponent(props.content)
});
const meta = ref<HTMLElement>({} as HTMLElement);
const isFixContorl = ref(false);
const codeAreaHeight = ref(0);
const link = computed(() => props.link?.replace(/^@docs/, github));

onMounted(() => {
  const foundDescs = meta.value.getElementsByClassName("description");
  const foundCodes = meta.value.getElementsByClassName("language-html");

  if (foundDescs.length) {
    codeAreaHeight.value =
      foundDescs[0].clientHeight + foundCodes[0].clientHeight + 30;
  } else {
    codeAreaHeight.value = foundCodes[0].clientHeight + 20;
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(show, (value) => {
  if (value) {
    meta.value.style.height = `${codeAreaHeight.value}px`
    window.addEventListener('scroll', handleScroll)
    setTimeout(handleScroll, 300) // Wait for the animation to finish
  } else {
    meta.value.style.height = '0'
    window.removeEventListener('scroll', handleScroll)
  }
})

function handleScroll() {
  const { top, bottom } = meta.value.getBoundingClientRect();
  isFixContorl.value =
    bottom > window.innerHeight && top + 44 <= window.innerHeight;
}
</script>

<style>
.pro-code {
  margin: 1rem 0;
  border: var(--el-border);
  border-radius: var(--el-border-radius-base);
  background: var(--el-bg-color);
  transition: var(--el-transition-all);
}
.pro-code:hover {
  box-shadow: var(--el-box-shadow-lighter);
}
.pro-code .source {
  padding: 24px;
  overflow-x: auto;
}
.pro-code .meta {
  padding: 0 10px;
  height: 0;
  background-color: var(--el-bg-color-page);
  overflow: hidden;
  transition: var(--el-transition-all);
}
.pro-code .meta .description {
  padding: 20px;
  margin: 10px 0;
  border: var(--el-border);
  box-sizing: border-box;
  background: var(--el-bg-color);
  font-size: 14px;
  line-height: 22px;
  color: var(--el-text-color-regular);
  word-break: break-word;
}
.pro-code .meta .description p {
  margin: 0;
  line-height: 26px;
}
.pro-code .meta .description code {
  display: inline-block;
  padding: 1px 5px;
  margin: 0 4px;
  height: 18px;
  border-radius: var(--el-border-radius-base);
  background-color: var(--docs-bg-code-inline);
  font-size: 12px;
  line-height: 18px;
}
.pro-code .control {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  box-sizing: border-box;
  border: 0;
  border-top: var(--el-border);
  border-bottom-left-radius: var(--el-border-radius-base);
  border-bottom-right-radius: var(--el-border-radius-base);
  background: var(--el-bg-color);
  text-align: center;
  color: var(--el-text-color-primary);
  cursor: pointer;
  width: 100%;
  user-select: none;
}
.pro-code .control.is-fixed {
  position: sticky;
  z-index: 1;
  bottom: 0;
}
.pro-code .control:hover {
  background-color: var(--el-bg-color-page);
  color: var(--el-color-primary);
}
.pro-code .control .control-icon {
  width: 16px;
  height: 16px;
  transform: translateX(35px);
  transition: var(--el-transition-md-fade);
}
.pro-code .control .control-text {
  opacity: 0;
  margin-left: 10px;
  transform: translateX(35px);
  transition: var(--el-transition-all);
}
.pro-code:hover .control .control-icon,
.pro-code .control:focus-visible .control-icon {
  transform: translateX(0);
}
.pro-code:hover .control .control-text,
.pro-code .control:focus-visible .control-text {
  opacity: 1;
  transform: translateX(0);
}
.pro-code .control .control-btn {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 24px;
  display: flex;
  align-items: center;
}
.pro-code .control .control-btn .btn-icon {
  margin-left: 12px;
  width: 24px;
  height: 24px;
  color: var(--el-text-color-primary);
}
.pro-code .control .control-btn .btn-icon:hover {
  color: var(--el-color-primary);
}
</style>
