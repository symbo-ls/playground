'use strict'

import { Flex } from '@symbo.ls/components'

export const demoComponent = {
  extend: Flex,

  caption: { },
  title: ({ props }) => {
    const { title } = props
    return {
      tag: title.tag,
      props: title
    }
  },

  button: {
    extend: 'Button',
    on: {
      click: (ev, element, state) => {
        state.update = state.update.bind(state)
        element.props.onClick(ev, state)
      }
    }
  }
}

export const CODE = `({ state }) => ({
  flow: 'column',
  align: 'flex-start space-between',
  padding: 'A2 B2 B2 B2',
  round: 'A2',
  boxSize: 'F1 G2',

  '@dark': {
    background: 'gray3 .65',
    color: 'white',
    boxShadow: 'black .05, 0 A A'
  },
  '@light': {
    background: 'white .8',
    color: 'gray3',
    boxShadow: 'gray12 .35, 0 A A'
  },

  caption: {
    text: 'Incremental Number',
    color: 'gray 1 +85'
  },

  title: {
    tag: 'h2',
    text: state.active,
    margin: '0 0 auto'
  },

  button: {
    text: 'Increment',
    fontSize: 'A',
    theme: 'primary',
    shape: 'tooltip',
    padding: 'Z2 B2',
    round: 'B2',
    margin: '-X2',

    onClick: event => {
      state.update({ active: state.active + 1 })
    }
  }
})`
