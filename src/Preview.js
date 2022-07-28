'use strict'

export const Preview = {
  props: {
    padding: '16 22',
    flex: 1,
    position: 'relative'
  },

  center: {
    props: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate3d(-50%, -50%, 1px)',

      css: {
        '& *': {
          minWidth: 10,
          minHeight: 10,
          fontFamily: 'Avenir Next'
        }
      }
    }
  }
}
