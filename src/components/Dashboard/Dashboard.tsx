import React, { useState } from "react";
import jsonData from "../../data/developers.json";
import { Link } from "react-router-dom";
import OpenModal from "../Modal/OpenModal";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="p-4 h-100 bg-black-100 m-5">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
          <thead className="text-xs text-gray-900 uppercase bg-gray-50  dark:text-gray-400">
            <tr>
              {Object.keys(jsonData[0]).map((heading, index) => {
                return (
                  <th scope="col" className="px-6 py-3">
                    {heading}
                  </th>
                );
              })}
              <th scope="col" className="px-6 py-3 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((tableData) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-700">
                  <td className="px-6 py-4">{tableData.first_name}</td>
                  <td className="px-6 py-4">{tableData.last_name}</td>
                  <td className="px-6 py-4">{tableData.email}</td>
                  <td className="px-6 py-4">{tableData.role}</td>
                  <td className="px-6 py-4">
                    {tableData?.status ? tableData.status : "Not available"}
                  </td>
                  <td className="px-6 py-4">{tableData.team}</td>
                  <td className="px-6 py-4 text-right">
                    <div 
                      onClick={handleOpen}
                      className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      View/Edit
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <OpenModal open={open} handleClose={handleClose} handleOpen={handleOpen} />
    </div>
  );
}

export default Dashboard;
