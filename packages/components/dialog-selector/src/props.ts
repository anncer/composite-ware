import { BaseSelectorProps } from "@composite-ware/components/base-selector/src/props"

export const DialogSelectorProps = ({
  show: {
    default: false,
    type: Boolean
  },
  title: {
    default: "人员选择器",
    type: String
  },
  // TODO
  // label: {
  //   type: String,
  //   require: true
  // },
  width: {
    default: '60%',
    type: String
  },
  ...BaseSelectorProps
}) as const

type basePropKeys = Array<keyof typeof BaseSelectorProps>

export const basePropKeys = Object.keys(BaseSelectorProps) as basePropKeys

export const dialogSelectorEmits = [
  'cancel',
  'confirm'
]
