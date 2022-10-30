<template>
  <el-dialog
    v-bind="dialogProps"
    :model-value="modelValue"
    :title="title"
    @close="handleClosed"
    custom-class="ce-dialog_treeselector"
    :before-close="handleBeforeClosed"
  >
    <CeTreeSelector
      ref="treeSelectorRef"
      v-bind="baseProps"
      :list="list"
      :placeholder="placeholder"
      :request="request"
      :search="search"
      :footer="false"
    />
    <div v-if="$slots && $slots.footer">
      <slot name="footer"></slot>
    </div>
    <div class="ce-dialogtree_footer">
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
      <el-button @click="handleCancle">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import { DialogTreeSelectorProps, dialogTreeSelectorEmits, treeSelectPropKeys, dialogPropKeys } from './props'
import CeTreeSelector from '@composite-ware/components/tree-selector'
import { UnknownArray } from '@composite-ware/components/types';

defineOptions({
   name: "CeDialogTreeSelector",
})

const props = defineProps(DialogTreeSelectorProps)
const emit = defineEmits(dialogTreeSelectorEmits)

const { modelValue } = toRefs(props)
const { beforeClose, title, list, placeholder, request, search,  } = props

const selection:any = ref(null)

const baseProps:any = {}

treeSelectPropKeys.forEach(key => {
    if (props[key] !== undefined && props[key] !== "") {
      baseProps[key] = props[key]
    }
  });

const dialogProps:any = {}

dialogPropKeys.forEach(key => {
  if (props[key] !== undefined && props[key] !== "") {
    dialogProps[key] = props[key]
  }
});

const treeSelectorRef = ref()

const handleConfirm = () => {
  const selected = treeSelectorRef.value && treeSelectorRef.value.getTreeRef().getCheckedKeys()
  emit('confirm', selected, true)
  emit('update:modelValue', false)
}

const handleCancle = () => {
  emit('cancel', false)
  emit('update:modelValue', false)
}

const handleClosed = () => {
  emit('update:modelValue', false)
}

const handleBeforeClosed = (done: Function) => {
  if (beforeClose && typeof beforeClose === 'function') {
    beforeClose(done)
  } else {
    done()
  }
}
</script>
