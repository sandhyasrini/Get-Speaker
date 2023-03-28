import { type SelectChangeEvent } from '@mui/material/Select'
import React, { type Dispatch, type SetStateAction, useEffect, useState } from 'react'
import { type developer } from '../../store/slices/developerSlice'
import { useAppSelector } from '../../store/store'
import SelectItem from '../SelectItem/SelectItem'
import TextBox from '../TextBox/TextBox'

interface Props {
  captureChange: (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string> | null,
    label: string
  ) => void
  checkFormFilled: Dispatch<SetStateAction<boolean>>
}

function ModalForm ({ captureChange, checkFormFilled }: Props): JSX.Element {
  const getStates = useAppSelector((state) => state)
  const [formData, setFormData] = useState(
    getStates.modal.modalAction === 'Edit'
      ? {
          name: true,
          status: true,
          role: true,
          email: true,
          team: true
        }
      : {
          name: false,
          status: false,
          role: false,
          email: false,
          team: false
        }
  )

  useEffect(() => {
    Object.values(formData).every((item) => item)
      ? checkFormFilled(true)
      : checkFormFilled(false)
  }, [checkFormFilled, formData])
  const getAllState = useAppSelector((state) => state)
  // const getDeveloper = useAppSelector(
  //   (state) => state.developer.selectedDeveloper
  // )
  // const modalDetails = useAppSelector((state) => state.modal)
  // const developers = useAppSelector((state) => state.developer.developers)

  return (
    <div>
      <TextBox
        label='Name'
        value={
          getAllState.modal.modalAction === 'Edit'
            ? (getAllState.developer.selectedDeveloper as developer)?.name
            : ''
        }
        id='name'
        onChangeElement={captureChange}
        checkTextFilled={setFormData}
        filledData={formData}
      />
      <TextBox
        label='email-address'
        value={
          getAllState.modal.modalAction === 'Edit'
            ? (getAllState.developer.selectedDeveloper as developer)?.email
            : ''
        }
        id='email'
        onChangeElement={captureChange}
        checkTextFilled={setFormData}
        filledData={formData}
      />
      <SelectItem
        menuItems={getAllState.developer.roles}
        label='Role'
        id='role'
        onChangeElement={captureChange}
        checkSelected={setFormData}
        filledData={formData}
      />
      <SelectItem
        menuItems={getAllState.developer.status}
        label='Status'
        id='status'
        onChangeElement={captureChange}
        checkSelected={setFormData}
        filledData={formData}
      />
      <SelectItem
        menuItems={getAllState.developer.team}
        label='Team'
        id='team'
        onChangeElement={captureChange}
        checkSelected={setFormData}
        filledData={formData}
      />
    </div>
  )
}

export default ModalForm
