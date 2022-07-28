'use strict'

export const props = {
  position: 'relative',
  background: 'gray1',
  padding: 'A1 B',
  widthRange: 'H H1',
  borderRadius: 'A',
  height: '100%',

  flex: '0 1 42%',
  display: 'flex',
  flexDirection: 'column',

  css: {
    '&': `
      .codeflask.codeflask {
      }
      .codeflask__textarea.codeflask__textarea {
        padding: 0;
        color: transparent;
      }

      .codeflask__textarea.codeflask__textarea:focus {
        outline: 0 0 3px inset blue;
      }

      .codeflask__flatten.codeflask__flatten {
        padding: 0;
        background: transparent;
        outline: none;
        box-shadow: none;
        border: none;
        width: 100%;
      }
    `,

    '& .token': {
      '&.keyword': { color: '#4f82ae' },
      '&.string': { color: '#c8749c' },
      '&.punctuation': { color: '#A3A3A8' },
      '&.function': { color: '#c7c981' },
      '&.property': { color: '#87b6cb' },
      '&.string-property': { color: '#C584C0' },
      '&.operator': { color: '#74b6d4' },
      '&.boolean': { color: '#589BD6' },
      '&.number': { color: '#B5CFA8' },
      '&.comment': { color: '#6A9A55' },
      '&.constant': { color: '#fff' }
    }
  }
}
