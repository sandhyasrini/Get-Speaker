import React, { Dispatch, SetStateAction, useState } from 'react'
import { type SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { debounce } from '../../utils/commonUtils'
import { regEx } from '../../config/regexPatterns'

interface Props {
  label: string
  value: string
  id: string
  filledData?: {}
  checkTextFilled: Dispatch<SetStateAction<any>>
  onChangeElement?: (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string> | null,
    label: string
  ) => void
}

function TextBox ({
  label,
  value,
  id,
  onChangeElement,
  checkTextFilled,
  filledData
}: Props): JSX.Element {
  const [isEmpty, setIsEmpty] = useState(false)
  const [helperText, setHelperText] = useState('')

  function onBlurEvent (e: any, label: string) {
    if (e.nativeEvent.target.value === '') {
      setHelperText(`Invalid  format or ${label} id not entered`)
      setIsEmpty(true)
    }
  }

  function onChangeEvent (e: any, label: string) {
    if (
      e.nativeEvent.target.value === '' ||
      !regEx[label.toLocaleLowerCase()].test(e.nativeEvent.target.value)
    ) {
      setHelperText(`Invalid  format or ${label} id not entered`)
      setIsEmpty(true)
      checkTextFilled && checkTextFilled({ ...filledData, [label]: false })
    } else {
      setIsEmpty(false)
      onChangeElement(e, label)
      setHelperText('')
      checkTextFilled && checkTextFilled({ ...filledData, [label]: true })
    }
  }

  return (
    <div className='my-8'>
      <div className='w-[100%] my-8'>
        <TextField
          fullWidth
          label={label}
          name={id}
          defaultValue={value}
          error={isEmpty}
          helperText={helperText}
          onBlur={(e) => onBlurEvent(e, id)}
          onChange={debounce(
            (e: React.ChangeEvent<HTMLInputElement>) => onChangeEvent(e, id),
            400
          )}
          size='small'
        />
      </div>
    </div>
  )
}

export default TextBox
