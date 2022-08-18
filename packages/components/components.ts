export * from './link/index'
export * from './table-column/index'

import { CeLink } from './link/index'
import { CeTableColumn } from './table-column/src/tableColumn'


import type { Plugin } from 'vue'

export default {
 CeLink,
 CeTableColumn
} as Record<string, Plugin>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CeLink: typeof CeLink
    CeTableColumn: typeof CeTableColumn
  }
}
