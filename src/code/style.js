'use strict'

export default {
  '&': `
    .codeflask.codeflask {
    }
    .codeflask__textarea.codeflask__textarea {
      padding: 0;
      color: transparent;
      caret-color: white;
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
