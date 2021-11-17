import React from 'react'
import { render, screen } from '@testing-library/react'

import { Avatar } from './avatar'

describe('<Avatar />', () => {
   beforeEach(() => {
      render(<Avatar />)
   })

   it('should render', () => {
      expect(screen.getByTestId(/reactar-avatar-wrapper/i)).toBeInTheDocument()
   })
})