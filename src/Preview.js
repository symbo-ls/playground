'use strict'

import { Scene, Flex } from '@symbo.ls/components'
import { demoComponent } from './code='

export const Preview = {
  extend: [Scene, Flex],

  props: {
    align: 'center center',
    flex: 1,
    position: 'relative',

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

      content: (el, state) => {
        return {
          extend: demoComponent,
          props: window.eval(state.code) // eslint-disable-line no-eval
        }
      }
    }
  }
}
