import React from 'react'
import { useAppSelector } from '../../store/store'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import Error from '../Error/Error'
import Navbar from '../Navbar/Navbar'
import Table from '../Table/Table'

function Dashboard (): JSX.Element {
  const state = useAppSelector((state) => state)
  return (
    <div>
        {state.developer.isError && <Error />}
      {!state.developer.isError && (!state.developer.isLoading
        ? (
          <div className='font-calibre'>
          <Navbar />
          <ButtonGroup
            firstButtonName='Name Randomizer'
            secondButtonName='Create New User'
          />
          <Table />
        </div>)
        : <div>{'Loading...'}</div>)}
    </div>
  )
}

export default Dashboard
