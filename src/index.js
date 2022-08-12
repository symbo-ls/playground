'use strict'

import { Preview } from './Preview'
import { CODE, Code } from './Code'

import * as smbls from 'smbls'
window.smbls = smbls

export const Playground = {
  state: {
    code: CODE
  },

  props: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignContent: 'stretch',
    fontFamily: 'Avenir Next',
    overflow: 'hidden',
    padding: '0 Z2 Z2',
    color: 'white',
    gap: 'Z2',

    style: { zIndex: '100000' }
  },

  Preview,
  Code
}
