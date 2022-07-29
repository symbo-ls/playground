'use strict'

export const CODE = `exports = {
  proto: 'Flex',

  state: { active: 0 },

  props: {
    flow: 'column',
    align: 'flex-start space-between',
    background: 'gray3 .65',
    color: 'white',
    padding: 'A2 B2 B2 B2',
    round: 'A2',
    boxSize: 'F1 G2',

    title: {
      color: 'gray 1 +85'
    },

    h2: {
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
  },

  title: { text: 'Incremental Number' },
  h2: { text: (el, state) => state.active },

  button: {
    proto: 'Button',
    text: 'Increment',
    on: {
      click: (ev, element, state) => {
        state.update({ active: state.active + 1 })
      }
    }
  }
}`
