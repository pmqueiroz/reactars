import React from 'react'
import './styles.scss'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
   badgeType?: 'none' | 'notification' | 'status'
}

const defaultProps: AvatarProps = {
   badgeType: 'none'
}

export const Avatar = (props: AvatarProps = defaultProps) => {
   const { badgeType, ...restProps } = props

   return (
      <div data-testid="reactar-avatar-wrapper" data-badgetype={badgeType} {...restProps}>
         Avatar
      </div>
   )
}
