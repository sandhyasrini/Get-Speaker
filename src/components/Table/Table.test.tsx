import React from 'react'
import { screen } from '@testing-library/react'
import Table from './Table'
import { renderWithProviders } from '../../utils/testUtil'

it('renders a table with table header', async () => {
  const result = renderWithProviders(<Table />, {
    preloadedState: {}
  })
  expect(await screen.findByRole('table')).toBeTruthy()
  expect(
    await result.container.querySelector('#table-head')
  ).toBeTruthy()
})

it('renders developer details in rows', () => {
  renderWithProviders(<Table />, {
    preloadedState: {
      developer: {
        developers: [
          {
            id: 2,
            name: 'Harry Potter',
            email: 'harry@chosenone.com',
            role: 'Backend',
            status: 'Full Time',
            team: 'Team G'
          },
          {
            id: 1,
            name: 'Albus Dumbledore',
            email: 'hogwarts.headmaster@gryffindor.com',
            role: 'Fullstack',
            status: 'Not available',
            team: 'Team G'
          },
          {
            id: 3,
            name: 'Tom Riddle',
            email: 'thedarklord@horcrux.com',
            role: 'Frontend',
            status: 'Contractor',
            team: 'Team S'
          },
          {
            id: 4,
            name: 'Luna Lovegood',
            email: 'blibbering_humdinger@dumbledorearmy.com',
            role: 'Fullstack',
            status: 'Full Time',
            team: 'Team R'
          }
        ],
        isLoading: false,
        isError: false
      }
    }
  })
  expect(screen.queryAllByRole('row')[0]).toBeTruthy()
  expect(screen.queryAllByRole('row').length).toEqual(6)
})
