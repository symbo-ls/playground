'use strict'

export const demoComponent = {
  component: 'Flex',
  state: { active: 0 },

  caption: { text: 'Incremental Number' },
  title: { tag: 'h2', text: (el, state) => state.active },

  button: {
    proto: 'Button',
    text: 'Increment',
    on: {
      click: (ev, element, state) => {
        state.update({ active: state.active + 1 })
      }
    }
  }
}

export const CODE = `props = {
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
    color: 'gray 1 +85'
  },

  title: {
    margin: '0 0 auto'
  },

  button: {
    fontSize: 'A',
    theme: 'primary',
    shape: 'tooltip',
    padding: 'Z2 B2',
    round: 'B2',
    margin: '-X2'
  }
}`
