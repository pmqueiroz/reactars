import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from './index'

export default {
   title: 'Avatar',
   component: Avatar,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})

Default.args = {
   badgeType: 'none'
}

export const Notification = Template.bind({})

Notification.args = {
   badgeType: 'notification'
}

export const Status = Template.bind({})

Status.args = {
   badgeType: 'status'
}
