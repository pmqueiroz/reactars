import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from '../index'

export default {
   title: 'Notification',
   component: Avatar,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Circle = Template.bind({})

Circle.args = {
   badgeType: 'notification',
   radii: 'circle'
}

export const Rounded = Template.bind({})

Rounded.args = {
   badgeType: 'notification',
   radii: 'rounded'
}

export const Square = Template.bind({})

Square.args = {
   badgeType: 'notification',
   radii: 'square'
}
