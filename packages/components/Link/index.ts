import { withInstall } from '@composite-ware/utils'
import Link from './Link'
import { linkProps } from './props'
import type { IDefineProps } from '../types/index'

export const CeLink = withInstall(Link)
export type ILinkProps = IDefineProps<typeof linkProps>
