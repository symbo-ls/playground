'use strict'

import DOM from '@rackai/domql'
import './define'

import { style } from './canvas/style'

import preview from './preview'
import code from './code'

window.DOM = DOM

var dom = DOM.create({
  style,
  preview,
  code
})
