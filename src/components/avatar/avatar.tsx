import React from 'react'

import { Wrapper } from './avatar.styles'
import { AllowedBadgeTypes, DefaultBadgeType, AvatarProps, BadgeColor } from './interface'

const allowedBadgeTypesMap: AllowedBadgeTypes[] = ['none', 'notification', 'status']

export const Avatar = <BageType extends AllowedBadgeTypes = DefaultBadgeType>(props: AvatarProps<BageType>) => {
   const {badgeType, ...restProps} = props

   if(!allowedBadgeTypesMap.includes(badgeType)) {
      throw new Error('badgeType is not allowed')
   }

   const letter = props.name?.charAt(0) || '?'

   const badgeColor: BadgeColor = {
      notification: '#E65A4D',
      busy: '#E65A4D',
      idle: '#F7C656',
      offline: '#CCCCCC',
      online: '#50CA42'
   }

   const overlapProps = {
      count: (props as unknown as AvatarProps<'notification'>).count > 99 ? 99 : (props as unknown as AvatarProps<'notification'>).count,
   }

   const stylesProps = {
      size: 248,
      backgroundColor: '#2A2C2C',
      radii: 'circle',
      badgePosition: 'top-right',
      badgeType,
      badgeColor,
      status: 'online',
      notificationTextColor: '#FFFFFF',
      ...restProps,
      ...overlapProps
   }

   return (
      <Wrapper letter={letter} {...stylesProps} />
   )
}
