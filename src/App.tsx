import React from 'react'
import Landing from './features/Landing/Landing'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material'
const theme = createTheme({
  typography: {
    fontFamily: [
      'Belle',
      'Calibre'
    ].join(',')
  }
})

function App (): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      <header className='App-header'>
    <Landing />
      </header>
    </div>
    </ThemeProvider>
  )
}

const AppWrapper = (): JSX.Element => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppWrapper
