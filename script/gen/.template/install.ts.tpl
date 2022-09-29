import { withInstall } from '@composite-ware/utils'

export * from './src'

import {{ tf }} from './src/{{ compName }}.vue'

export const Ce{{ tf }} = withInstall({{ tf }})

export default Ce{{ tf }}
