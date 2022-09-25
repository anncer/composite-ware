import {PropType, CSSProperties } from 'vue';
export const CardProps = ({
  shadow: {
    default: true,
    type: Boolean
  },
  title: {
    default: '',
    type: String
  },
  footer: {
    default: '',
    type: String
  },
  bodyStyle: {
    type: Object as PropType<CSSProperties>
  },
})
