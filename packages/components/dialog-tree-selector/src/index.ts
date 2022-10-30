import type { IDefineProps } from '../../types/index'
import { withInstall } from '@composite-ware/utils'
import DialogTreeSelector from './dialog-tree-selector.vue'

import { DialogTreeSelectorProps } from './props'

export const CeDialogTreeSelector = withInstall(DialogTreeSelector)
export type DialogTreeSelectorProps = IDefineProps<typeof DialogTreeSelectorProps>
