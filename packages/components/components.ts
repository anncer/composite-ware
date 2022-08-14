export * from './Link/index'

import { ProLink } from './Link/index'
import type { Plugin } from 'vue'

export default {
 ProLink
} as Record<string, Plugin>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ProLink: typeof ProLink
  }
}
