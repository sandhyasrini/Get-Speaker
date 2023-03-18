import React from "react";

function TableHead() {
  return (
    <thead className="text-xs text-gray-900 uppercase bg-gray-50  dark:text-gray-400">
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
  );
}

export default TableHead;
