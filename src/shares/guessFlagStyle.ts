import { CSSProperties } from 'react'
import { FlagStyle } from '../types/types'

/**
 * Guess flag style
 * @param {FlagStyle} style - Flag style
 * @returns {CSSProperties | undefined} - CSS properties
 */
const guessFlagStyle = (style: FlagStyle): CSSProperties | undefined => {
  switch (style) {
    case FlagStyle.CURVED:
      return { borderRadius: '5%' }
    case FlagStyle.BLACK_AND_WHITE:
      return { filter: 'grayscale(100%)' }
    case FlagStyle.REVERSE:
      return { transform: 'scaleX(-1)' }
    case FlagStyle.SHADOW:
      return { boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)' }
    case FlagStyle.SEPIA:
      return { filter: 'sepia(75%)' }
    case FlagStyle.BLUR:
      return { filter: 'blur(2px)' }
    default:
      return undefined
  }
}

export default guessFlagStyle
