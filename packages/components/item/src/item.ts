import type { IDefineProps } from '../../types/index'
import { withInstall } from '@composite-ware/utils'
import Item from './item.vue'

export const ItemProps = ({
  label: {
    type: String,
    require: true
  },
  labelWidth: {
    type: [String, Number]
  },
  height: {
    default: '40px',
    type: [String, Number]
  },
  width: {
    type: [String, Number]
  }
})
export const CeItem = withInstall(Item)
export type IItemProps = IDefineProps<typeof ItemProps>
