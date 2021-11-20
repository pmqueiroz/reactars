import { css } from 'styled-components'

const circleBase = [70, 170]
const roundedBase = [90, 190]
const squareBase = [95, 195]

const genTranslate = (base: number, offset: number, negative?: boolean) => `${negative ? '-' : ''}${base + offset}%`

export const badgePositionMap = (offset = 0) => ({
   'circle': {
      'top-left': css`
      left: 50%;
      top: 50%;
      transform: translate(${genTranslate(circleBase[1], offset, true)}, ${genTranslate(circleBase[1], offset, true)});
   `,
      'top-right': css`
      left: 50%;
      top: 50%;
      transform: translate(${genTranslate(circleBase[0], offset)}, ${genTranslate(circleBase[1], offset, true)});
   `,
      'bottom-left': css`
      left: 50%;
      top: 50%;
      transform: translate(${genTranslate(circleBase[1], offset, true)}, ${genTranslate(circleBase[0], offset)}); 
   `,
      'bottom-right': css`
      left: 50%;
      top: 50%;
      transform: translate(${genTranslate(circleBase[0], offset)}, ${genTranslate(circleBase[0], offset)});
   `,
   },
   'rounded': {
      'top-left': css`
      left: 50%;
      top: 50%;
      transform: translate(${genTranslate(roundedBase[1], offset, true)}, ${genTranslate(roundedBase[1], offset, true)});
   `,
      'top-right': css`
      left: 50%;
      top: 50%;
      transform: translate(${genTranslate(roundedBase[0], offset)}, ${genTranslate(roundedBase[1], offset, true)});
   `,
      'bottom-left': css`
      left: 50%;
      top: 50%;
      transform: translate(${genTranslate(roundedBase[1], offset, true)}, ${genTranslate(roundedBase[0], offset)}); 
   `,
      'bottom-right': css`
      left: 50%;
      top: 50%;
      transform: translate(${genTranslate(roundedBase[0], offset)}, ${genTranslate(roundedBase[0], offset)});
   `,
   },
   'square': {
      'top-left': css`
      left: 50%;
      top: 50%;
      transform: translate(${genTranslate(squareBase[1], offset, true)}, ${genTranslate(squareBase[1], offset, true)});
   `,
      'top-right': css`
      left: 50%;
      top: 50%;
      transform: translate(${genTranslate(squareBase[0], offset)}, ${genTranslate(squareBase[1], offset, true)});
   `,
      'bottom-left': css`
      left: 50%;
      top: 50%;
      transform: translate(${genTranslate(squareBase[1], offset, true)}, ${genTranslate(squareBase[0], offset)});
   `,
      'bottom-right': css`
      left: 50%;
      top: 50%;
      transform: translate(${genTranslate(squareBase[0], offset)}, ${genTranslate(squareBase[0], offset)});
   `,
   }
})
