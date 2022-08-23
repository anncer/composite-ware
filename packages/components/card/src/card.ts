import type { IDefineProps } from '../../types/index'
import { withInstall } from '@composite-ware/utils'
import Card from './card.vue'
import { CardProps } from './props'

export const CeCard = withInstall(Card)
export type ICardProps = IDefineProps<typeof CardProps>
