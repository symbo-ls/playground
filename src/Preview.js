'use strict'

import { Scene, Flex } from '@symbo.ls/components'

export const Preview = {
  proto: [Scene, Flex],

  props: {
    align: 'center center',
    flex: 1,
    position: 'relative',
    theme: { background: 'gray1 .55' },

    scene: {
      padding: 'A B2',
      style: { backgroundPosition: '0 0' }
    }
  },

  scene: {
    _shadow: {
      // tag: 'shadow',

      styles: {
        tag: 'head',
        on: {
          attachNode: ({ node }) => {}
        }
      },

      content: (el, state) => window.eval(state.code) // eslint-disable-line no-eval
    }
  }
}
