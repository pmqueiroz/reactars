import React from 'react'
import './styles.scss'

type Status = 'online' | 'busy' | 'idle' | 'offline'

interface IntrinsicBadgeTypes {
   none: {
      name: string
   }
   notification: {
      count: number
   }
   status: {
      status: Status
   }
}

type AllowedBadgeTypes = 'none' | 'notification' | 'status'
type DefaultBadgeType = 'none'

type WithBadgeTypesIntrinsicProps<
   BadgeType extends keyof IntrinsicBadgeTypes, 
   OwnProps
> = IntrinsicBadgeTypes[BadgeType] & OwnProps & { badgeType: BadgeType }

interface AvatarOwnProps extends React.HTMLAttributes<HTMLDivElement> {
   cleiton?: string
   badgeType?: AllowedBadgeTypes
}

export type AvatarProps<
   BadgeType extends AllowedBadgeTypes = DefaultBadgeType
> = WithBadgeTypesIntrinsicProps<BadgeType, AvatarOwnProps>


export const Avatar = <BageType extends AllowedBadgeTypes = DefaultBadgeType>(props: AvatarProps<BageType>) => {
   const { badgeType = 'none', ...restProps } = props

   return (
      <div data-testid="reactar-avatar-wrapper" data-name={name} data-badgetype={badgeType} {...restProps}>
         Avatar
      </div>
   )
}
