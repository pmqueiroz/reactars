import { CSSProperties } from 'react'

export type Status = 'online' | 'busy' | 'idle' | 'offline'

export interface IntrinsicBadgeTypesProps {
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

export type AllowedBadgeTypes = 'none' | 'notification' | 'status'
export type Radii = 'circle' | 'rounded' | 'square'
export type DefaultBadgeType = 'none'

export type WithBadgeTypesIntrinsicProps<
   BadgeType extends keyof IntrinsicBadgeTypesProps, 
   OwnProps
> = IntrinsicBadgeTypesProps[BadgeType] & OwnProps & { badgeType: BadgeType }

export interface AvatarStylesOwnProps {
   radii: Radii | CSSProperties['borderRadius']
   backgroundColor: string
   letter: string
   size: number
}

export interface AvatarOwnProps extends React.HTMLAttributes<HTMLDivElement>, Partial<Omit<AvatarStylesOwnProps, 'letter'>> {
   name: string
   badgeType?: AllowedBadgeTypes
}

export type AvatarProps<
   BadgeType extends AllowedBadgeTypes = DefaultBadgeType
> = WithBadgeTypesIntrinsicProps<BadgeType, AvatarOwnProps>
