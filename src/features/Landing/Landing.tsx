import React from 'react'
import { useAppDispatch } from '../../store/store'
import { getDeveloperList } from '../../store/actions/developerAction'
import Dashboard from '../../components/Dashboard/Dashboard'

function Landing (): JSX.Element {
  const dispatch = useAppDispatch()

  dispatch(getDeveloperList())
  return (
    <section>
      <Dashboard />
    </section>
  )
}

export default Landing
