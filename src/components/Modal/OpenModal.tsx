import React, { type Dispatch, type SetStateAction, useCallback, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import ModalForm from './ModalForm'
import ModalList from './ModalList'
import { type RootState, useAppDispatch, useAppSelector, createNewModalSelector, createNewDeveloperSelector } from '../../store/store'
import Button from '../Button/Button'
import memoize from 'lodash.memoize'
import { type developer } from '../../store/slices/developerSlice'
import {
  addDeveloperToDatabase,
  editDeveloper
} from '../../store/actions/developerAction'
import { type SelectChangeEvent } from '@mui/material/Select'

interface Props {
  open: boolean
  handleClose: Dispatch<SetStateAction<boolean>>
}

function OpenModal ({ open, handleClose }: Props): JSX.Element {
  console.log('loading modal...')
  const [details, setDetails] = useState<developer>()
  const [formFilled, setFormFilled] = useState(false)
  const [isDropDownVisible, setDropdownVisibility] = useState(true)

  const getAllDevelopers = useAppSelector(createNewDeveloperSelector)
  const getModalDetails = useAppSelector(createNewModalSelector)

  const dispatch = useAppDispatch()

  useEffect(() => {
    setDetails(
      getModalDetails.modalAction === 'Edit' &&
        (getAllDevelopers.selectedDeveloper as developer)
    )
  }, [getModalDetails])

  const addDetails = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string> | null,
    label: string
  ) => {
    e.target.value !== '' &&
      setDetails({ ...details, [e.target?.name]: e.target.value })
  }

  function onSubmitForm (
    e: React.MouseEvent<HTMLButtonElement> | null,
    isOpen: boolean
  ): void {
    if (getModalDetails.modalAction !== 'Randomize') {
      getModalDetails.modalAction === 'Edit'
        ? dispatch(editDeveloper(details)).then(() => {
          setDropdownVisibility(true)
          handleClose(isOpen)
        })
          .catch(() => {
            setDropdownVisibility(true)
            handleClose(isOpen)
          })
        : dispatch(
          addDeveloperToDatabase({
            ...details,
            id: getAllDevelopers.developers.length + 1
          } as developer)
        ).then(() => {
          setDropdownVisibility(true)
          handleClose(isOpen)
        })
        .catch(() => {
          setDropdownVisibility(true)
            handleClose(isOpen)
          })
    }
    setDropdownVisibility(true)
    handleClose(isOpen)
  }

  function onSubmitRandomizeForm (): void {
    setDropdownVisibility(false)
  }

  function onCloseModal (
    e: React.MouseEvent<HTMLButtonElement> | null,
    isOpen: boolean
  ): void {
    setDropdownVisibility(true)
    handleClose(isOpen)
  }

  return (
    <section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {getModalDetails.heading}
          </Typography>
          <Typography
            component={'div'}
            id='modal-modal-description'
            sx={{ mt: 2 }}
            className='m-10'
          >
            {(getModalDetails.modalAction === 'Edit' ||
              getModalDetails.modalAction === 'Create') && (
              <ModalForm
                captureChange={addDetails}
                checkFormFilled={setFormFilled}
              />
            )}
            {getModalDetails.modalAction === 'Randomize' && (
              <ModalList
                onSubmitForm={onSubmitRandomizeForm}
                isDropdownVisible={isDropDownVisible}
                handleModalState = {onCloseModal}
              />
            )}
          </Typography>
          {(getModalDetails.modalAction === 'Edit' ||
            getModalDetails.modalAction === 'Create' ||
            !isDropDownVisible) && (
            <section className='flex flex-1'>
              <Button
                buttonName='Cancel'
                handleModalState={onCloseModal}
                modalState={open}
                buttonStyle='outlined'
                isDisabled={false}
                buttonType='InsideModal'
              />
              <Button
                buttonName='Done'
                handleModalState={onSubmitForm}
                modalState={open}
                buttonStyle='contained'
                isDisabled={
                  getModalDetails.modalAction === 'Randomize'
                    ? false
                    : !formFilled
                }
                buttonType='InsideModal'
              />
            </section>
          )}
        </Box>
      </Modal>
    </section>
  )
}

export default OpenModal
