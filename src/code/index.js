'use strict'

import CodeFlask from 'codeflask'

import { style, code } from './style'
import preview from '../preview'

import { objectify } from './utils'

var str = `var Button = {
  tag: 'button',
  style: {
    background: 'white',
    color: 'black',
    padding: '10 20',
    fontSize: 16,
    borderRadius: 10,
    fontWeight: 500,
    boxShadow: '0 3px 10px rgba(0, 0, 0, .35)',
    border: 0
  }
}

var number = {
  tag: 'h2',
  text: 0
}

var app = {
  number,
  increment: {
    proto: Button,
    text: 'Increment',
    on: {
      click: event => {
        number.update({ text: number.text + 1 })
      }
    }
  }
}

// connecting to preview
window.app = app`

export default {
  style,

  header: 'Code',

  content: {
    style: code,
    attr: { contentEditable: true },
    on: {
      render: element => {
        var flask = new CodeFlask(element.node, {
          language: 'js',
          defaultTheme: false
        })

        flask.updateCode(str)

        flask.onUpdate((code) => {
          // var obj = objectify(code.replace(/'/g, ''))
          // try {  } catch (error) {
            //   throw error
            // }
          eval(code)  
          preview.center.set(app)
        })
      }
    }
  }
}
