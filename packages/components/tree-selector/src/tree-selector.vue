<template>
  <div class="ce-treesel_container">
    <div v-if="search" class="ce-treesel_search">
      <el-input prefix-icon="Search" v-model="filterText" clearable :placeholder="placeholder"></el-input>
    </div>
    <el-scrollbar wrap-class="ce-treesel_content">
      <el-tree
        ref="elTreeRef"
        :data="treeList"
        :props="defaultProp"
        showCheckbox
        v-bind="treeProps"
        :filter-node-method="filterMethod"
        class="ce-treesel_tree"
        v-on="treeEvents"
      >
        <template v-if="$slots && $slots.default" #default="{ node, data }">
          <slot v-bind="{node, data }"></slot>
        </template>
      </el-tree>
    </el-scrollbar>
    <div v-if="$slots && $slots.footer" class="ce-treesel_footer">
      <slot name="footer"></slot>
    </div>
    <div v-else-if="footer" class="ce-treesel_footer">
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
      <el-button @click="handleCancle">取 消</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import type { Ref } from 'vue'
import { treeSelectotProp, treePropsKeys, treeEmits, treeEmitEs } from "./props";
import { useGetTreeData } from './hooks/useApiHook'
import { defaultTreeProp } from './constant'

defineOptions({
   name: "CeTreeSelector",
})

const props = defineProps(treeSelectotProp)
const emit = defineEmits(treeEmits.concat(treeEmitEs))

const { list, search, footer, request, filterNodeMethod, placeholder } = props
const defaultProp = props.props || defaultTreeProp
const filterText = ref('')
const formatter = request?.formatter

let treeProps: any = {}
const handBindProps = ['filterNodeMethod', 'prop']
treePropsKeys.forEach(key => {
  if (props[key] !== undefined && props[key] !== "" && !handBindProps.includes(key)) {
    treeProps[key] = props[key]
  }
});

const treeList: Ref<any[]> = ref([])
const getList = () => {
  useGetTreeData()
    .then((res: any) => {
        treeList.value = formatter ? formatter(res.data) : res.data.children
    })
}

const filterMethod = (value: any, data: any) => {
  if (filterNodeMethod) {
    return filterNodeMethod(value, data)
  } else {
    if (!value) return true
    return data[defaultProp.label as string].indexOf(value) !== -1
  }
}

const elTreeRef = ref()

watch(filterText, (text) => {
  elTreeRef.value.filter(text)
})

list && watch(list, (list) => {
  treeList.value = list
})

const treeEvents = {}

const handleEmit = (r: string, ...arg: any) => {
  emit(r, ...arg)
}

const makeEvents = (list: string[], enentProps: any) => {
  list.forEach(it => {
    enentProps[it] = (...args: any) => {
      handleEmit(it, ...args)
    }
  })
}

makeEvents(treeEmitEs, treeEvents)

const handleConfirm = () => {
  const arr = elTreeRef.value.getCheckedKeys()
  emit('confirm', arr)
}

const handleCancle = () => {
  emit('cancle')
}

onMounted(() => {
  if (list) {
    treeList.value = list
  } else {
    getList()
  }
})

function getTreeRef() {
  return elTreeRef.value || undefined;
}

defineExpose({
  elTreeRef,
  getTreeRef,
})

</script>

