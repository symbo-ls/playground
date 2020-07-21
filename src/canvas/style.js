'use strict'

import { injectGlobal } from 'emotion'

export const style = {
  background: '#1D2043',
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignContent: 'stretch',
  fontFamily: 'Avenir Next',
  top: 0,
  left: 0,
  overflow: 'hidden',
  color: 'white'
}

injectGlobal`
  html, body {
    overflow: hidden;
  }
`