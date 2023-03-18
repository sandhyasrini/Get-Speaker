import React, { useState } from "react";
import OpenModal from "../Modal/OpenModal";
import { useAppDispatch, useAppSelector } from "../../store/store";
import TableHead from "../TableHead/TableHead";
import { changeHeading } from "../../store/slices/modalSlice";

function Dashboard(): JSX.Element {
  const developers = useAppSelector((state) => state.developer.developers);

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  const dispatch = useAppDispatch();

  function handleModalOpen() {
    dispatch(changeHeading({ heading: "Edit User" , modalAction: 'Edit'}));
    handleOpen();
  }

  return (
    <div className="p-4 h-100 bg-black-100 m-5">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
          <TableHead />
          <tbody>
            {developers.map((tableData) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-700">
                  <td className="px-6 py-4">
                    {tableData.first_name} {tableData.last_name}
                  </td>
                  <td className="px-6 py-4">{tableData.email}</td>
                  <td className="px-6 py-4">{tableData.role}</td>
                  <td className="px-6 py-4">
                    {tableData?.status ? tableData.status : "Not available"}
                  </td>
                  <td className="px-6 py-4">{tableData.team}</td>
                  <td className="px-6 py-4 text-right">
                    <div
                      onClick={handleModalOpen}
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
      <OpenModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default Dashboard;
