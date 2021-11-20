import styled, { css } from 'styled-components'
import { ifNotProp, switchProp } from 'styled-tools'
import { AvatarProps, AvatarStylesOwnProps } from './interface'
import { Merge } from 'type-fest'

import { toRem } from '../../helpers'
import { badgePositionMap } from './partials/badgePositionMap'

const badgeIntrinsicProps = (props: AvatarStylesOwnProps) => css`
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: calc(${toRem(props.size)} / 6);
   font-weight: bolder;
   border: calc(${toRem(props.size)} / 42) solid #fff;
   width:calc(${toRem(props.size)} / 4);
   height:calc(${toRem(props.size)} / 4);
   border-radius: 50%;
   ${() => badgePositionMap()[props.radii][props.badgePosition]};
`

export const Wrapper = styled.div`
   display: flex;
   position: relative;
   align-items: center;
   justify-content: center;
   width: ${(props: AvatarStylesOwnProps) => toRem(props.size)};
   height: ${(props: AvatarStylesOwnProps) => toRem(props.size)};

   background-color: ${(props: AvatarStylesOwnProps) => props.backgroundColor};

   ${switchProp('badgeType', {
      'notification': css`
         &::before {
            content: '${(props: Merge<AvatarStylesOwnProps, Partial<Pick<AvatarProps<'notification'>, 'count'>>>) => props.count}';
            background-color: ${(props: AvatarStylesOwnProps) => props.badgeColors.notification};
            color: ${(props: Merge<AvatarStylesOwnProps, Partial<Pick<AvatarProps<'notification'>, 'notificationTextColor'>>>) => props.notificationTextColor};
            ${badgeIntrinsicProps}
         }
      `,
      'status': css`
         &::before {
            content: '';
            background-color: ${(props: Merge<AvatarStylesOwnProps, Partial<Pick<AvatarProps<'status'>, 'status'>>>) => props.badgeColors[props.status || 'offline']};
            ${badgeIntrinsicProps}
         }
      `
   })}

   ${ifNotProp('url', css`
      &:after {
         content: '${(props: AvatarStylesOwnProps) => props.letter}';
         color: rgba(255, 255, 255, 0.8);
         font-size: ${(props: AvatarStylesOwnProps) => `calc(${toRem(props.size)} / 2)`};
         font-weight: bold;
         position: absolute;
      }
   `, css`
      background: url(${(props: AvatarStylesOwnProps) => props.url});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
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
