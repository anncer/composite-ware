import tableColumn from './tableColumn.vue'
import { withInstall } from '@composite-ware/utils'


import type { IDefineProps } from '../../types/index'

import { tableProps } from './default'

export const CeTableColumn = withInstall(tableColumn)
export type ITableProps = IDefineProps<typeof tableProps>
