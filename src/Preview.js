'use strict'

import DOM from 'domql'
import { initEmotion } from 'domql/packages/emotion'
import { Scene, Flex } from '@symbo.ls/components'

export const Preview = {
  proto: [Scene, Flex],

  props: {
    align: 'center center',
    flex: 1,
    position: 'relative',
    theme: { background: 'gray1 .45' },

    scene: {
      padding: 'A B2',
      css: { backgroundPosition: '0 0' }
    }
  },

  scene: {
    shadow: {
      tag: 'shadow',

      styles: {
        tag: 'head',
        on: {
          attachNode: ({ node }) => {
            console.log(node)
            // initEmotion(node)
          }
        }
      },

      content: (el, state) => {
        // return DOM.create(window.eval(state.code), el) // eslint-disable-line no-eval
        return window.eval(state.code) // eslint-disable-line no-eval
      }
    }
  }
}
