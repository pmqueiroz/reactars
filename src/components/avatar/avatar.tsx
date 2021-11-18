import React from 'react'

import { Wrapper } from './avatar.styles'
import { AllowedBadgeTypes, DefaultBadgeType, AvatarProps } from './interface'

const allowedBadgeTypesMap: AllowedBadgeTypes[] = ['none', 'notification', 'status']

export const Avatar = <BageType extends AllowedBadgeTypes = DefaultBadgeType>(props: AvatarProps<BageType>) => {
   const {badgeType, ...restProps} = props

   if(!allowedBadgeTypesMap.includes(badgeType)) {
      throw new Error('badgeType is not allowed')
   }

   const letter = props.name?.charAt(0) || '?'

   const stylesProps = {
      size: 48,
      backgroundColor: '#2A2C2C',
      radii: 'circle',
      ...restProps
   }

   return (
      <Wrapper letter={letter} {...stylesProps} />
   )
}
