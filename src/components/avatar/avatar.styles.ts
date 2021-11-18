import styled, { css } from 'styled-components'
import { ifNotProp, switchProp } from 'styled-tools'
import { AvatarStylesOwnProps } from './interface'

import { toRem } from '../../helpers'

export const Wrapper = styled.div<AvatarStylesOwnProps>`
   display: flex;
   align-items: center;
   justify-content: center;
   width: ${(props: AvatarStylesOwnProps) => toRem(props.size)};
   height: ${(props: AvatarStylesOwnProps) => toRem(props.size)};

   background-color: ${(props: AvatarStylesOwnProps) => props.backgroundColor};

   ${ifNotProp('url', css`
      &:after {
         content: '${(props: AvatarStylesOwnProps) => props.letter}';
         color: rgba(255, 255, 255, 0.8);
         font-size: ${(props: AvatarStylesOwnProps) => `calc(${toRem(props.size)} / 2)`};
         font-weight: bold;
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translate(-50%,-50%);
      }
   `)}

   ${switchProp('radii', {
      'rounded': css`
         border-radius: ${(props: AvatarStylesOwnProps) => `calc(${toRem(props.size)} / 4)`};
      `,
      'circle': css`
         border-radius: ${(props: AvatarStylesOwnProps) => `calc(${toRem(props.size)} / 2)`};
      `,
      'square':  css`
         border-radius: ${(props: AvatarStylesOwnProps) => `calc(${toRem(props.size)} / 8)`};
      `,
   }, css `
         border-radius: ${(props: AvatarStylesOwnProps) => props.radii}
      `
   )}
`
