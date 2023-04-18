import React from 'react'
import MemoizedButton from './Button'
import { renderWithProviders } from '../../utils/testUtil'

describe('renders button component', () => {
  it('renders a button', () => {
    renderWithProviders(<MemoizedButton buttonName='Btn' />)
  })
})
