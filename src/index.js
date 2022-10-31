'use strict'

import { Preview } from './Preview'
import { CODE, Code } from './Code'

import * as smbls from 'smbls'
window.smbls = smbls

export const Playground = {
  state: {
    active: 0,
    code: CODE
  },

  props: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'stretch',
    fontFamily: 'smbls',
    overflow: 'hidden',
    padding: '0 Z2',
    color: 'white',
    gap: 'Z2',

    '@tabletL': {
      flexDirection: 'column'
    },

    style: { zIndex: '100000' }
  },

  Preview,
  Code
}
