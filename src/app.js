'use strict'

import { style } from './canvas/style'

import preview from './preview'
import code from './code'

import * as smbls from 'smbls'
window.smbls = smbls

export const Playground = {
  style,
  preview,
  code
}
