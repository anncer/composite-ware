import { withInstall } from '@composite-ware/utils'



export * from './src'

import Title from './src/title.vue'

export const CeTitle = withInstall(Title)

export default CeTitle
