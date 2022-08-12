'use strict'

import CodeFlask from 'codeflask'

import style from './style'

export * from './code'

export const Code = {
  props: {
    position: 'relative',
    background: 'gray1',
    padding: 'A1 B',
    widthRange: 'H H1',
    borderRadius: 'A',
    height: '100%',

    flex: '0 1 42%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Code',

    style
  },

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
