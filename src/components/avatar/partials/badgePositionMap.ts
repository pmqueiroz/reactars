import { css } from 'styled-components'

export const badgePositionMap = {
   'circle': {
      'top-left': css`
      left: 50%;
      top: 50%;
      transform: translate(-170%, -170%);
   `,
      'top-right': css`
      left: 50%;
      top: 50%;
      transform: translate(70%, -170%);
   `,
      'bottom-left': css`
      left: 50%;
      top: 50%;
      transform: translate(-170%, 70%); 
   `,
      'bottom-right': css`
      left: 50%;
      top: 50%;
      transform: translate(70%, 70%);
   `,
   },
   'rounded': {
      'top-left': css`
      left: 50%;
      top: 50%;
      transform: translate(-190%, -190%);
   `,
      'top-right': css`
      left: 50%;
      top: 50%;
      transform: translate(90%, -190%);
   `,
      'bottom-left': css`
      left: 50%;
      top: 50%;
      transform: translate(-190%, 90%); 
   `,
      'bottom-right': css`
      left: 50%;
      top: 50%;
      transform: translate(90%, 90%);
   `,
   },
   'square': {
      'top-left': css`
      left: 50%;
      top: 50%;
      transform: translate(-195%, -195%);
   `,
      'top-right': css`
      left: 50%;
      top: 50%;
      transform: translate(95%, -195%);
   `,
      'bottom-left': css`
      left: 50%;
      top: 50%;
      transform: translate(-195%, 95%); 
   `,
      'bottom-right': css`
      left: 50%;
      top: 50%;
      transform: translate(95%, 95%);
   `,
   }
}
