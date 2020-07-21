'use strict'

export const style = {
  padding: '16 22',
  flex: 1,
  position: 'relative'
}

export const center = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 1px)',

  '*': {
    minWidth: 10,
    minHeight: 10,
    fontFamily: 'Avenir Next'
  }
}
