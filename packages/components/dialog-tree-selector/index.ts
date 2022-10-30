import { withInstall } from '@composite-ware/utils'

export * from './src'

import DialogTreeSelector from './src/dialog-tree-selector.vue'

export const CeDialogTreeSelector = withInstall(DialogTreeSelector)

export default CeDialogTreeSelector
