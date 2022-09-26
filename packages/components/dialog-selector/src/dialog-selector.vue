<template>
  <el-dialog
    v-model="isShow"
    :title='title'
    append-to-body
    :close-on-click-modal="false"
    :width="width"
    @close="handleClosed"
  >
    <CeBaseSelector v-bind="baseProps" @select="handleSelect"></CeBaseSelector>
    <div slot="footer" class="ce-selector_footer">
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
      <el-button @click="handleCancle">取 消</el-button>
    </div>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref, reactive, watch, toRefs, onMounted, nextTick } from 'vue';
import { DialogSelectorProps, dialogSelectorEmits, basePropKeys } from './props'
import CeBaseSelector from '@composite-ware/components/base-selector'
import { UnknownArray } from '@composite-ware/components/types';


  defineOptions({
    name: 'CeDialogSelector',
  })
  const props = defineProps(DialogSelectorProps)
  const emit = defineEmits(dialogSelectorEmits)

  const { title,  show, width } = toRefs(props)
  const isShow = ref(false)
  watch(show, (value) => {
    isShow.value = value
  })

  const selection:any = ref(null)

  const baseProps:any = {}

  basePropKeys.forEach(key => {
    if (props[key] !== undefined && props[key] !== "") {
      baseProps[key] = props[key]
    }
  });

  const handleSelect = (arr: UnknownArray) => {
    selection.value = arr
  }

  const handleConfirm = () => {
    emit('cancel', false)
    isShow.value = false
  }
  const handleCancle = () => {
    emit('confirm', selection.value)
    isShow.value = false
  }
  const handleClosed = () => {

  }
</script>
