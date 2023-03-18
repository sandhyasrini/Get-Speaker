import React from 'react'

function ModalList() {

const names = ['sandhya', 'swetha', 'Lina', 'Melina']
  return (
    <div className='flex flex-col'>
       {names.map((name) => {
        return (
            <ul>
                {name}
            </ul>
        )
       })}
    </div>
  )
}

export default ModalList