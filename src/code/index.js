'use strict'

import CodeFlask from 'codeflask'

import { props } from './props'

export * from './code'

export const Code = {
  props,

  attr: { contentEditable: true },

  on: {
    render: ({ state, node }) => {
      var flask = new CodeFlask(node, {
        language: 'js',
        defaultTheme: false,
        styleParent: false
      })

      flask.updateCode(state.code)
      flask.onUpdate(code => state.update({ code }))
    }
  }
}
