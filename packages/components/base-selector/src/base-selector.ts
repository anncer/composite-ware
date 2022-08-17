import type button from './index.vue'
import type { IDefineProps } from '../../types/index'
import { withInstall } from '@composite-ware/utils'
import baseSelector from './base-selector.vue'

export const baseSelectorProps = ({

})
export const CeBaseSelectoe = withInstall(baseSelector)
export type ILinkProps = IDefineProps<typeof baseSelectorProps>
