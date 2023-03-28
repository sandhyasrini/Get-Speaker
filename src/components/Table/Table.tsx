import React, { useCallback, useState } from 'react'
import OpenModal from '../Modal/OpenModal'
import { useAppDispatch, useAppSelector } from '../../store/store'
import TableHead from '../TableHead/TableHead'
import TablePagination from '@mui/material/TablePagination'
import { changeHeading } from '../../store/slices/modalSlice'
import PaginationComponent from '../PaginationComponent/PaginationComponent'
import { currentDeveloper } from '../../store/slices/developerSlice'
import { getSortedArray } from '../../utils/commonUtils'

function Table (): JSX.Element {
  console.log('table rendering...')
  const getAllDevelopers = useAppSelector((state) => state.developer.developers)
  const developers = React.useMemo(
    () => getSortedArray(getAllDevelopers),
    [getAllDevelopers]
  )
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = (): void => {
    setOpen(true)
  }
  const handleClose = (): void => {
    setOpen(false)
  }
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  function handleModalOpen (
    event: React.MouseEvent<HTMLDivElement> | null
  ): void {
    const editDeveloper = event?.currentTarget.dataset.id
    const developer = developers.find((user) => {
      return user.id === Number(editDeveloper)
    })
    dispatch(changeHeading({ heading: 'Edit User', modalAction: 'Edit' }))
    developer !== null && dispatch(currentDeveloper(developer))
    handleOpen()
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - developers.length) : 0

  const handleChangePage = useCallback((
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ): void => {
    setPage(newPage)
  }, [])

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10))
      setPage(0)
    },
    [setRowsPerPage]
  )

  return (
    <div className='px-4 h-100 bg-black-100 m-5'>
      <div className='relative overflow-x-auto'>
        {
          developers 
            ? (<table className='w-full text-md text-left text-gray-900 dark:text-gray-400'>
                <TableHead />
                <tbody>
                  {(rowsPerPage > 0
                    ? developers.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    : developers
                  ).map((tableData, index) => (
                    <tr
                      key={index}
                      className='bg-white border-b dark:bg-gray-100 dark:border-gray-700 hover:bg-blue-300 hover:text-white'
                    >
                      <td className='px-6 py-4'>{tableData.name}</td>
                      <td className='px-6 py-4'>{tableData.email}</td>
                      <td className='px-6 py-4'>{tableData.role}</td>
                      <td className='px-6 py-4'>{tableData?.status}</td>
                      <td className='px-6 py-4'>{tableData.team}</td>
                      <td className='px-6 py-4 text-right'>
                        <div
                          onClick={handleModalOpen}
                          data-id={tableData.id}
                          className='cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline hover:text-white'
                        >
                          View/Edit
                        </div>
                      </td>
                    </tr>
                  ))}
                  {emptyRows > 0 && (
                    <tr style={{ height: 53 * emptyRows }}>
                      <td colSpan={6} />
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  <tr>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                      colSpan={6}
                      count={developers.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      ActionsComponent={PaginationComponent}
                    />
                  </tr>
                </tfoot>
              </table>)
            : <div>Loading...</div> }
      </div>
      {open && <OpenModal open={open} handleClose={handleClose} />}
    </div>
  )
}

export default Table
