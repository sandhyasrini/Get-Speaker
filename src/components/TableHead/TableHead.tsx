import React from 'react'

function Heading (): JSX.Element {
  return (
    <thead id="table-head" className="text-sm text-gray-900 uppercase bg-gray-200  dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Email
        </th>
        <th scope="col" className="px-6 py-3">
          Role
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
        <th scope="col" className="px-6 py-3">
          Team
        </th>
        <th scope="col" className="px-6 py-3 text-right">
          Actions
        </th>
      </tr>
    </thead>
  )
}
const TableHead = React.memo(Heading)
export default TableHead
