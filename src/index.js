'use strict'

import DOM from 'domql'
import * as Symbols from 'smbls'
import './define'

import { Playground } from './app'

window.DOM = DOM
window.Symbols = Symbols

DOM.create(Playground)
