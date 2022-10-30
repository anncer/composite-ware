<template>
  <el-dialog
    v-bind="dialogProps"
    :model-value="modelValue"
    :title="title"
    @close="handleClosed"
    custom-class="ce-selector_dialog"
    :before-close="handleBeforeClosed"
  >
    <CeBaseSelector v-bind="baseProps" @select="handleSelect"></CeBaseSelector>
    <div class="ce-selector_footer" v-if="$slots && $slots.footer">
      <slot name="footer" v-bind="{ selection }"></slot>
    </div>
    <div v-else class="ce-selector_footer">
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
      <el-button @click="handleCancle">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>

import { ref, toRefs } from 'vue';
import { DialogSelectorProps, dialogSelectorEmits, basePropKeys, dialogPropKeys} from './props'
import CeBaseSelector from '@composite-ware/components/base-selector'
import { UnknownArray } from '@composite-ware/components/types';

  defineOptions({
    name: 'CeDialogSelector',
  })

  const props = defineProps(DialogSelectorProps)
  const emit = defineEmits(dialogSelectorEmits)

  const { modelValue } = toRefs(props)


  const { beforeClose, title } = props

  const selection:any = ref(null)

  const baseProps:any = {}

  basePropKeys.forEach(key => {
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

  const handleSelect = (arr: UnknownArray) => {
    selection.value = arr
    emit('select', selection.value)
  }

  const handleConfirm = () => {
    emit('confirm', selection.value, true)
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
