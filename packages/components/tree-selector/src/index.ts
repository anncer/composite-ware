import type { IDefineProps } from '../../types/index'
import { withInstall } from '@composite-ware/utils'
import TreeSelector from './tree-selector.vue'

import { treeSelectotProp } from './props'

export const CeTreeSelector = withInstall(TreeSelector)
export type treeSelectotProps = IDefineProps<typeof treeSelectotProp>
