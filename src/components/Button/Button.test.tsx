import React from 'react'
import MemoizedButton from './Button'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../../utils/testUtil'

describe('renders button component', () => {
  it('renders a button', async () => {
    renderWithProviders(<MemoizedButton buttonName='testButton' />)
    expect(await screen.findByRole('button')).toBeTruthy()
  })
})

describe('invokes onclick function', () => {
  const onClick = jest.fn()
  it('renders a button', async () => {
    renderWithProviders(<MemoizedButton buttonName='testButton' handleModalState={onClick} buttonAction='Create'/>)
    expect(await screen.findByRole('button')).toBeTruthy()
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
