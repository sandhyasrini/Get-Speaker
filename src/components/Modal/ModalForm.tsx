import { SelectChangeEvent } from "@mui/material/Select";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { developer } from "../../store/slices/developerSlice";
import { useAppSelector } from "../../store/store";
import { findUniqueItems } from "../../utils/commonUtils";
import SelectItem from "../SelectItem/SelectItem";
import TextBox from "../TextBox/TextBox";

interface Props {
  captureChange: (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string> | null,
    label: string
  ) => void;
  checkFormFilled: Dispatch<SetStateAction<boolean>>;
}

function ModalForm({ captureChange, checkFormFilled }: Props) {
  const getStates = useAppSelector((state) => state);
  const [formData, setFormData] = useState(
    getStates.modal.modalAction === "Edit"
      ? {
          name: true,
          status: true,
          role: true,
          email: true,
          team: true,
        }
      : {
          name: false,
          status: false,
          role: false,
          email: false,
          team: false,
        }
  );

  useEffect(() => {
    Object.values(formData).every((item) => item === true)
      ? checkFormFilled(true)
      : checkFormFilled(false);
  }, [formData]);
  const getDeveloper = useAppSelector(
    (state) => state.developer.selectedDeveloper
  );
  const modalDetails = useAppSelector((state) => state.modal);
  const developers = useAppSelector((state) => state.developer.developers);

  return (
    <div>
      <TextBox
        label="Name"
        value={
          modalDetails.modalAction === "Edit"
            ? (getDeveloper as developer)?.name
            : ""
        }
        id="name"
        onChangeElement={captureChange}
        checkTextFilled={setFormData}
        filledData={formData}
      />
      <TextBox
        label="email-address"
        value={
          modalDetails.modalAction === "Edit"
            ? (getDeveloper as developer)?.email
            : ""
        }
        id="email"
        onChangeElement={captureChange}
        checkTextFilled={setFormData}
        filledData={formData}
      />
      <SelectItem
        menuItems={findUniqueItems(developers, "role")}
        label="Role"
        id="role"
        onChangeElement={captureChange}
        checkSelected={setFormData}
        filledData={formData}
      />
      <SelectItem
        menuItems={findUniqueItems(developers, "status")}
        label="Status"
        id="status"
        onChangeElement={captureChange}
        checkSelected={setFormData}
        filledData={formData}
      />
      <SelectItem
        menuItems={findUniqueItems(developers, "team")}
        label="Team"
        id="team"
        onChangeElement={captureChange}
        checkSelected={setFormData}
        filledData={formData}
      />
    </div>
  );
}

export default ModalForm;
