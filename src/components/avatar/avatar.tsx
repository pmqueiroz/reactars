import React from 'react'
import { mergeDeepRight } from 'ramda'

import { Wrapper } from './avatar.styles'
import { AllowedBadgeTypes, DefaultBadgeType, AvatarProps, AvatarStylesOwnProps } from './interface'

const allowedBadgeTypesMap: AllowedBadgeTypes[] = ['none', 'notification', 'status']

export const Avatar = <BageType extends AllowedBadgeTypes = DefaultBadgeType>(props: AvatarProps<BageType>) => {
   const {badgeType, ...restProps} = props

   if(!allowedBadgeTypesMap.includes(badgeType)) {
      throw new Error('badgeType is not allowed')
   }

   const letter = props.name?.charAt(0) || '?'

   const overlapProps = {
      count: (props as unknown as AvatarProps<'notification'>).count > 99 ? 99 : (props as unknown as AvatarProps<'notification'>).count,
   }
   
   const defaultProps = {
      size: 48,
      backgroundColor: '#2A2C2C',
      radii: 'circle',
      badgePosition: 'top-right',
      badgeType,
      status: 'online',
      name: 'Reactars',
      letter,
      notificationTextColor: '#FFFFFF',
      badgeOffset: 0,
      badgeColors: {
         notification: '#E65A4D',
         busy: '#E65A4D',
         idle: '#F7C656',
         offline: '#CCCCCC',
         online: '#50CA42'
      }
   } as AvatarStylesOwnProps

   const stylesProps = mergeDeepRight(mergeDeepRight(defaultProps, restProps), overlapProps) as unknown as AvatarStylesOwnProps

   return (
      <Wrapper data-testid="reactars" {...stylesProps} />
   )
}

export const ReactarsNotification = (props: Omit<AvatarProps<'notification'>, 'badgeType'>) => <Avatar<'notification'> badgeType="notification" {...props} />

export const ReactarsStatus = (props: Omit<AvatarProps<'status'>, 'badgeType'>) => <Avatar<'status'> badgeType="status"  {...props} />

export const ReactarsDefault = (props: Omit<AvatarProps<'none'>, 'badgeType'>) => <Avatar<'none'> badgeType="none"  {...props} />
