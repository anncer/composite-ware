import {PropType, CSSProperties } from 'vue';
export const TitleProps = ({

  title: {
    type: String,
    require: true
  },

  suffixIcon: String,

  boxStyle: {
    type: Object as PropType<CSSProperties>
  },

  line: {
    default: true,
    type: Boolean
  },

  lineColor: {
    type: String
  },
})
