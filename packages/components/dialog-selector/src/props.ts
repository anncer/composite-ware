import { BaseSelectorProps } from "@composite-ware/components/base-selector/src/props"

export const DialogContextProps = {
  width: {
    default: '60%',
    type: String
  },
  top: {
    default: '15vh',
    type: String
  },
  fullscreen: {
    default: false,
    type: Boolean
  },
  modal: {
    default: true,
    type: Boolean
  },
  appendToBody: {
    default: false,
    type: Boolean
  },
  showClose: {
    default: true,
    type: Boolean
  },
  lockScroll: {
    default: true,
    type: Boolean
  },
  closeOnClickModal: {
    default: true,
    type: Boolean
  },
  closeOnPressEscape: {
    default: true,
    type: Boolean
  },
  destroyOnClose: {
    default: false,
    type: Boolean
  },
  draggable: {
    default: false,
    type: Boolean
  },
  openDelay: {
    default: 0,
    type: Number
  },
  closeDelay: {
    default: 0,
    type: Number
  }
}

export const DialogSelectorProps = {
  modelValue: {
    default: false,
    type: Boolean
  },
  beforeClose: {
    type: Function
  },
  title: {
    default: "人员选择器",
    type: String
  },
  ...DialogContextProps,
  ...BaseSelectorProps
} as const

type basePropKeys = Array<keyof typeof BaseSelectorProps>

export const basePropKeys = Object.keys(BaseSelectorProps) as basePropKeys

type dialogPropKeys = Array<keyof typeof DialogContextProps>

export const dialogPropKeys = Object.keys(DialogContextProps) as dialogPropKeys

export const dialogSelectorEmits = [
  'cancel',
  'confirm',
  'select',
  "update:modelValue"
]
