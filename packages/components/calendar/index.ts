import { withInstall } from '@composite-ware/utils'

export * from './src'

import Calendar from './src/calendar.vue'

export const CeCalendar = withInstall(Calendar)

export default CeCalendar
