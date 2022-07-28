'use strict'

export const CODE = `exports = {
  h2: '0',
  increment: {
    proto: smbls.Button,
    text: 'Increment',
    on: {
      click: (ev, { parent }) => {
        const number = parseInt(parent.h2.text)
        parent.h2.update({ text: number + 1 })
      }
    }
  }
}`
