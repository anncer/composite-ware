import type { IDefineProps } from '../../types/index'
import { withInstall } from '@composite-ware/utils'
import Title from './title.vue'

export const TitleProps = ({
  title: {
    type: String,
    require: true
  },
  height: {
    default: '40px',
    type: [String, Number]
  },

  fontSize: {
    default: '16px',
    type: [String, Number]
  },

  line: {
    default: true,
    type: Boolean
  },
  lineColor: {
    type: String
  },
  left: {
    default: '20px',
    type: [String, Number]
  }
})


export const CeTitle = withInstall(Title)
export type ITitleProps = IDefineProps<typeof TitleProps>
