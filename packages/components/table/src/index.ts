import table from './table.vue'
import { withInstall } from '@composite-ware/utils'


import type { IDefineProps } from '../../types/index'

import { CeTableProps } from './default'

export const CeTable = withInstall(table)
export type ITableProps = IDefineProps<typeof CeTableProps>
