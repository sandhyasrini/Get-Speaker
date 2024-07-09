import React from 'react'
import { screen } from '@testing-library/react'
import App from './App'
import { renderWithProviders } from './utils/testUtil'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const data = {
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
  ]
}
export const handlers = [
  rest.get(
    'http://localhost:3001/api/v1/getDevelopers',
    async (req, res, ctx) => {
      return await res(ctx.json(data), ctx.delay(150))
    }
  )
]

export const tasksHandlerException = rest.get(
  'http://localhost:3001/api/v1/getDevelopers',
  async (req, res, ctx) =>
    await res(ctx.status(500), ctx.json({ message: 'Not Found' }))
)

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => {
  server.listen()
})

// Reset any runtime request handlers we may add during the tests.
afterEach(() => {
  server.resetHandlers()
})

// Disable API mocking after the tests are done.
afterAll(() => {
  server.close()
})

it('renders Loading page when fetching data from API', () => {
  renderWithProviders(<App />, {
    preloadedState: {
      developer: {
        isError: false,
        isLoading: true
      },
      modal: {}
    }
  })
  expect(screen.getByText(/Loading.../i)).toBeTruthy()
})

it('renders dashboard after fetching data', async () => {
  server.use(...handlers)
  renderWithProviders(<App />, {
    preloadedState: {}
  })
  expect(await screen.findByText(/Developer Dashboard/i)).toBeTruthy()
})

it('renders Error page when fetching data from API failed', async () => {
  server.use(tasksHandlerException)
  renderWithProviders(<App />, {
    preloadedState: {
      developer: {
        isError: true,
        isLoading: false
      },
      modal: {}
    }
  })
  expect(await screen.findByText(/Error Occured in our servers/i)).toBeTruthy()
})
