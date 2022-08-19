export * from './link/index'
export * from './table/index'

import { CeLink } from './link/index'
import { CeTable } from './table/src/table'


import type { Plugin } from 'vue'

export default {
 CeLink,
 CeTable
} as Record<string, Plugin>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CeLink: typeof CeLink
    CeTable: typeof CeTable
  }
}
