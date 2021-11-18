import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from '../index'

export default {
   title: 'Status',
   component: Avatar,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Circle = Template.bind({})

Circle.args = {
   badgeType: 'status',
   radii: 'circle'
}

export const Rounded = Template.bind({})

Rounded.args = {
   badgeType: 'status',
   radii: 'rounded'
}

export const Square = Template.bind({})

Square.args = {
   badgeType: 'status',
   radii: 'square'
}
