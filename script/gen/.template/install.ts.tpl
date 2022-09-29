import { withInstall } from '@composite-ware/utils'

export * from './src'

import {{ compName }} from './src/{{ compName }}.vue'

export const Ce{{ compName }} = withInstall({{ compName }})

export default Ce{{ compName }}
