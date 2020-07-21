'use strict'

import DOM from '@rackai/domql'
import * as Symbols from '@rackai/symbols'
import './define'

import { style } from './canvas/style'

import preview from './preview'
import code from './code'

window.DOM = DOM
window.Symbols = Symbols

var dom = DOM.create({
  style,
  preview,
  code
})
