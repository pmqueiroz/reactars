import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from '../index'

export default {
   title: 'None',
   component: Avatar,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Circle = Template.bind({})

Circle.args = {
   badgeType: 'none',
   radii: 'circle',
   name: 'Reactars'
}

export const Rounded = Template.bind({})

Rounded.args = {
   badgeType: 'none',
   radii: 'rounded',
   name: 'Reactars'
}

export const Square = Template.bind({})

Square.args = {
   badgeType: 'none',
   radii: 'square',
   name: 'Reactars'
}
