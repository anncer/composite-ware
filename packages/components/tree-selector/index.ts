import { withInstall } from '@composite-ware/utils'

export * from './src'

import TreeSelector from './src/tree-selector.vue'

export const CeTreeSelector = withInstall(TreeSelector)

export default CeTreeSelector
