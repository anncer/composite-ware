import { baseSelectorProps } from "@composite-ware/components/base-selector/src/props"

export const dialogSelectorProps = ({
  show: {
    default: false,
    type: Boolean
  },
  title: {
    default: "选择器",
    type: String
  },
  label: {
    type: String,
    require: true
  },
  width: {
    default: '100%',
    type: String
  },
  ...baseSelectorProps
}) as const

type basePropKeys = Array<keyof typeof baseSelectorProps>

export const basePropKeys = Object.keys(baseSelectorProps) as basePropKeys

export const dialogSelectorEmits = [
  'closed',
  'seelcted'
]
