'use strict'

import CodeFlask from 'codeflask'

import { style, code } from './style'
import { Preview } from '../Preview'

var str = `var Button = {
  tag: 'button',
  style: {
    // emotion
    background: 'white',
    color: 'black',
    padding: '10 20',
    fontSize: '16',
    borderRadius: '10',
    fontWeight: '500',
    boxShadow: '0 3px 10px rgba(0, 0, 0, .35)',
    border: '0'
  }
}

var number = { text: 0 }

var app = {
  h2: number,
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

// connecting to Preview
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
          eval(code) // eslint-disable-line no-eval
          Preview.center.set(window.app)
        })
      }
    }
  }
}
