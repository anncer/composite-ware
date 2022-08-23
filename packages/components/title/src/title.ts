import type { IDefineProps } from '../../types/index'
import { withInstall } from '@composite-ware/utils'
import Title from './title.vue'

import { TitleProps } from './props'


export const CeTitle = withInstall(Title)
export type ITitleProps = IDefineProps<typeof TitleProps>
