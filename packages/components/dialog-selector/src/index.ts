import type { IDefineProps } from '../../types/index'
import { withInstall } from '@composite-ware/utils'
import dialogSelector from './dialog-selector.vue'

import { DialogSelectorProps } from './props'

export const CeDialogSelector = withInstall(dialogSelector)
export type IDialogSelectorProps = IDefineProps<typeof DialogSelectorProps>
