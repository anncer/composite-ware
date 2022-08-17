export * from './link/index'

import { CeLink } from './link/index'
import type { Plugin } from 'vue'

export default {
 CeLink
} as Record<string, Plugin>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CeLink: typeof CeLink
  }
}
