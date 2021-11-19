import React from 'react'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { Avatar as Subject } from '../index'
import { AvatarProps } from '../interface'

const Wrapper = styled.div`
  display: flex;
  width: calc(100vw - 5rem);
  gap: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Row = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: row;
`

export default {
   title: 'Avatar',
   component: Subject,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof Subject>

const circle = [
   {
      badgeType: 'notification',
      name: 'Reactar',
      count: 2,
      url: 'https://user-images.githubusercontent.com/54639269/142344983-bbc7ced5-ef64-4918-b84f-c758c5151a07.jpeg'
   },
   {
      badgeType: 'status',
      status: 'online',
      name: 'Reactar',
      url: 'https://user-images.githubusercontent.com/54639269/142344983-bbc7ced5-ef64-4918-b84f-c758c5151a07.jpeg'
   },   
   {
      badgeType: 'status',
      status: 'idle',
      name: 'Reactar',
      url: 'https://user-images.githubusercontent.com/54639269/142344983-bbc7ced5-ef64-4918-b84f-c758c5151a07.jpeg'
   },   
   {
      badgeType: 'status',
      status: 'busy',
      name: 'Reactar'
   },   
   {
      badgeType: 'status',
      status: 'offline',
      name: 'Peam'
   },
]

const rounded = [
   {
      badgeType: 'notification',
      radii: 'rounded',
      name: 'Reactar',
      count: 2,
      url: 'https://user-images.githubusercontent.com/54639269/142344983-bbc7ced5-ef64-4918-b84f-c758c5151a07.jpeg'
   },
   {
      badgeType: 'status',
      radii: 'rounded',
      status: 'online',
      name: 'Reactar',
      url: 'https://user-images.githubusercontent.com/54639269/142344983-bbc7ced5-ef64-4918-b84f-c758c5151a07.jpeg'
   },   
   {
      badgeType: 'status',
      radii: 'rounded',
      status: 'idle',
      name: 'Reactar',
      url: 'https://user-images.githubusercontent.com/54639269/142344983-bbc7ced5-ef64-4918-b84f-c758c5151a07.jpeg'
   },   
   {
      badgeType: 'status',
      radii: 'rounded',
      status: 'busy',
      name: 'Reactar'
   },   
   {
      badgeType: 'status',
      radii: 'rounded',
      status: 'offline',
      name: 'Peam'
   }
]

const square = [
   {
      badgeType: 'notification',
      radii: 'square',
      name: 'Reactar',
      count: 2,
      url: 'https://user-images.githubusercontent.com/54639269/142344983-bbc7ced5-ef64-4918-b84f-c758c5151a07.jpeg'
   },
   {
      badgeType: 'status',
      radii: 'square',
      status: 'online',
      name: 'Reactar',
      url: 'https://user-images.githubusercontent.com/54639269/142344983-bbc7ced5-ef64-4918-b84f-c758c5151a07.jpeg'
   },   
   {
      badgeType: 'status',
      radii: 'square',
      status: 'idle',
      name: 'Reactar',
      url: 'https://user-images.githubusercontent.com/54639269/142344983-bbc7ced5-ef64-4918-b84f-c758c5151a07.jpeg'
   },   
   {
      badgeType: 'status',
      radii: 'square',
      status: 'busy',
      name: 'Reactar'
   },   
   {
      badgeType: 'status',
      radii: 'square',
      status: 'offline',
      name: 'Peam'
   }
]

export const Avatar = () => {
   return (
      <Wrapper >
         <Row>
            {circle.map((props, i) => <Subject key={i} size={60} {...props as AvatarProps}></Subject>)}
         </Row>
         <Row>
            {rounded.map((props, i) => <Subject key={i} size={60} {...props as AvatarProps}></Subject>)}
         </Row>
         <Row>
            {square.map((props, i) => <Subject key={i} size={60} {...props as AvatarProps}></Subject>)}
         </Row>
      </Wrapper>
   )
}
