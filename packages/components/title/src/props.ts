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
