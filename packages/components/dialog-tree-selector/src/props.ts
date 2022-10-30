import { elTreeProps, TreeSelectorRequestProp, treeEmitEs } from "@composite-ware/components/tree-selector/src/props"
import { DialogContextProps } from '@composite-ware/components/dialog-selector/src/props'
import { PropType } from 'vue'

export const DialogTreeSelectorProps = {
 modelValue: {
    default: false,
    type: Boolean
  },
  beforeClose: {
    type: Function
  },
  title: {
    default: "组织机构选择器",
    type: String
  },
  list: {
    type: Array as PropType<any[]>
  },
  placeholder: {
    type: String,
    default: "输入关键字进行过滤"
  },
  request: {
    type: Object as PropType<TreeSelectorRequestProp>
  },
  search: {
    default: true,
    type: Boolean
  },
  ...elTreeProps,
  ...DialogContextProps,
}


type treeSelectPropKeys = Array<keyof typeof elTreeProps>

export const treeSelectPropKeys = Object.keys(elTreeProps) as treeSelectPropKeys

type dialogPropKeys = Array<keyof typeof DialogContextProps>

export const dialogPropKeys = Object.keys(DialogContextProps) as dialogPropKeys

export const dialogTreeSelectorEmits = [
  'cancel',
  'confirm',
  "update:modelValue"
  // ...treeEmitEs
]
