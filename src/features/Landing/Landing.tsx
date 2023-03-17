import React from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import Navbar from '../../components/Navbar/Navbar'
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup'

function Landing() {
  return (
    <div>
        <Navbar />
        <ButtonGroup />
        <Dashboard />
    </div>
  )
}

export default Landing