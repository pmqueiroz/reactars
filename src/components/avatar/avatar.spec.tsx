import React from 'react'
import { render, screen } from '@testing-library/react'

import { Avatar } from './avatar'

describe('<Avatar />', () => {
   beforeEach(() => {
      render(<Avatar badgeType="none" name="Peam" />)
   })

   it('should render', () => {
      expect(screen.getByTestId(/reactar/i)).toHaveAttribute('name', 'Peam')
   })
})
