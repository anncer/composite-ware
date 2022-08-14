import { withInstall } from '@composite-ware/utils'
import Link from './Link'
import { linkProps } from './props'
import type { IDefineProps } from '../types/index'

export { linkProps } from './props'
export const ProLink = withInstall(Link)
export type ILinkProps = IDefineProps<typeof linkProps>
