'use strict'

import { Preview } from './Preview'
import { Code } from './code'

import * as smbls from 'smbls'
window.smbls = smbls

export const Playground = {
  props: {
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
  },

  Preview,
  Code
}
