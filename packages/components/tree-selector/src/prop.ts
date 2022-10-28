import { PropType } from "vue"
import type { Component } from 'vue'
import type { UnknownFunction, UnknownObject } from '../../types/index'

export interface treePropAttr {
  label?: string | UnknownFunction
  children?: string
  disabled?: string | UnknownFunction
  isLeaf?: string | UnknownFunction
  class?: string | UnknownFunction
}

export interface TreeSelectorRequestProp {
  url?: string
  method?: string
  headers?: UnknownObject
  params?: UnknownObject,
  loading?: Boolean,
  // fields?: BaseFieldsProp,
  formatter?: UnknownFunction
}

export const elTreeProps = {
  emptyText: {
    type: String,
    default: "暂无数据"
  },
  nodeKey: {
    type: String,
    default: "id"
  },
  props: {
    type: Object as PropType<treePropAttr>,
  },
  renderAfterExpand: {
    type: Boolean,
    default: true
  },
  load: {
    type: Function as PropType<UnknownFunction>
  },
  lazy: {
    type: Boolean,
    default: false
  },
  renderContent: {
    type: Function as PropType<UnknownFunction>
  },
  highlightCurrent: {
    type: Boolean,
    default: false
  },
  defaultExpandAll: {
    type: Boolean,
    default: false
  },
  expandOnClickNode: {
    type: Boolean,
    default: true
  },
  checkOnClickNode:{
    type: Boolean,
    default: false
  },
  autoExpandParent: {
    type: Boolean,
    default: true
  },
  defaultExpandedKeys: {
    type: Array as PropType<string[] | number[]>
  },
  checkStrictly:{
    type: Boolean,
    default: true
  },
  defaultCheckedKeys: {
    type: Array as PropType<string[] | number[]>
  }	,
  currentNodeKey: {
    type: [String, Number],
  },
  filterNodeMethod: {
    type: Function as PropType<UnknownFunction>
  }	,
  accordion: {
    type: Boolean,
    default: false
  },
  indent: {
    type: Number,
    default: 18
  },
  icon: {
    type: [String, Object] as PropType<string | Component>
  },
  draggable: {
    type: Boolean,
    default: false
  },
  allowDrag: {
    type: Function as PropType<UnknownFunction>
  },
  allowDrop: {
    type: Function as PropType<UnknownFunction>
  }
}

export const treeSelectotProp = ({
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
  footer: {
    default: false,
    type: Boolean
  },
  // multiple: {
  //   type: Boolean,
  //   default: true
  // },
  // limit: {
  //   type: Number,
  //   default: 0
  // },
  ...elTreeProps
}) as const


type treeProps = Array<keyof typeof elTreeProps>

export const treePropsKeys = Object.keys(elTreeProps) as treeProps


export const treeEmits = [
  'select',
  'confirm',
  'cancle',
]

export const treeEmitEs = [
  'node-click',
  'node-contextmenu',
  'check-change',
  'check',
  'current-change',
  'node-expand',
  'node-collapse',
  'node-drag-start',
  'node-drag-enter',
  'node-drag-leave',
  'node-drag-over',
  'node-drag-end',
  'node-drop'
]
