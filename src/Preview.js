'use strict'

import { Flex } from 'smbls'

export const Preview = {
  proto: Flex,

  props: {
    align: 'center center',
    padding: 'A B2',
    flex: 1,
    position: 'relative'
  },

  center: {
    tag: 'shadow',

    content: (element, state) => {

      return window.eval(state.code) // eslint-disable-line no-eval
    }
  }
}
