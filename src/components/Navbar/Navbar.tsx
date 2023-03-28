import { Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import React from 'react'

function Navbar (): JSX.Element {
  return (
    <div>
      <AppBar component='nav' className='absolute'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            className='flex flex-1 font-calibre'
          >
            Developer Dashboard
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
