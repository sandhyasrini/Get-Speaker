import React from "react";
import { developer } from "../../store/slices/developerSlice";
import { useAppSelector } from "../../store/store";
import { findUniqueItems } from "../../utils/commonUtils";
import SelectItem from "../SelectItem/SelectItem";
import TextBox from "../TextBox/TextBox";

function ModalForm() {
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
            ? (getDeveloper as developer)?.first_name
            : ""
        }
      />
      <TextBox
        label="email-address"
        value={
          modalDetails.modalAction === "Edit"
            ? (getDeveloper as developer)?.email
            : ""
        }
      />
      <SelectItem
        menuItems={findUniqueItems(developers, "role")}
        label="Role"
      />
      <SelectItem
        menuItems={findUniqueItems(developers, "status")}
        label="Status"
      />
      <SelectItem
        menuItems={findUniqueItems(developers, "team")}
        label="Team"
      />
    </div>
  );
}

export default ModalForm;
