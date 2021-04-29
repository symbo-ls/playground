'use strict'

import DOM from '@rackai/domql'
import * as Symbols from '@rackai/symbols'
import './define'

import App from './app'

window.DOM = DOM
window.Symbols = Symbols

DOM.create(App)
