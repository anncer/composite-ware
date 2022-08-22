import type { IDefineProps } from '../../types/index'
import { withInstall } from '@composite-ware/utils'
import baseSelector from './base-selector.vue'

export const baseSelectorProps = ({

})
export const CeBaseSelector = withInstall(baseSelector)
export type IBaseSelectorProps = IDefineProps<typeof baseSelectorProps>
