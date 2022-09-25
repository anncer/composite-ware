export * from './link'
export * from './table'
export * from './breadcrumb'
export * from './item'
export * from './title'
export * from './card'
export * from './base-selector'
export * from './dialog-selector'

import { CeLink } from './link'
import { CeTable } from './table/src'
import { CeBreadcrumb } from './breadcrumb'
import { CeItem } from './item'
import { CeTitle } from './title'
import { CeCard } from './card'
import { CeBaseSelector } from './base-selector'
import { CeDialogSelector } from './dialog-selector'

import type { Plugin } from 'vue'

export default {
 CeLink,
 CeTable,
 CeBreadcrumb,
 CeItem,
 CeTitle,
 CeCard,
 CeBaseSelector,
 CeDialogSelector
} as Record<string, Plugin>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CeLink: typeof CeLink
    CeTable: typeof CeTable
    CeBreadcrumb: typeof CeBreadcrumb
    CeItem: typeof CeItem
    CeTitle: typeof CeTitle,
    CeCard: typeof CeCard,
    CeBaseSelector: typeof CeBaseSelector,
    CeDialogSelector: typeof CeDialogSelector,
  }
}
