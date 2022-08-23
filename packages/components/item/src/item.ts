import type { IDefineProps } from '../../types/index'
import { withInstall } from '@composite-ware/utils'
import Item from './item.vue'
import { ItemProps } from './props'

export const CeItem = withInstall(Item)
export type IItemProps = IDefineProps<typeof ItemProps>
