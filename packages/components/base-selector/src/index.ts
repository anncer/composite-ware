import type { IDefineProps } from '../../types/index'
import { withInstall } from '@composite-ware/utils'
import baseSelector from './base-selector.vue'

import { BaseSelectorProps } from './props'

export const CeBaseSelector = withInstall(baseSelector)
export type IBaseSelectorProps = IDefineProps<typeof BaseSelectorProps>
