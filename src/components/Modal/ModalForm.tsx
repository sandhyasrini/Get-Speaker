import { SelectChangeEvent } from "@mui/material/Select";
import React, { Dispatch, SetStateAction } from "react";
import { developer } from "../../store/slices/developerSlice";
import { useAppSelector } from "../../store/store";
import { findUniqueItems } from "../../utils/commonUtils";
import SelectItem from "../SelectItem/SelectItem";
import TextBox from "../TextBox/TextBox";

interface Props {
  captureChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | SelectChangeEvent<string>
      | null,
    label: string
  ) => void;
  checkFormFilled:  Dispatch<SetStateAction<boolean>>;

}

function ModalForm({ captureChange, checkFormFilled }: Props) {
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
        checkTextFilled={checkFormFilled}
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
        checkTextFilled={checkFormFilled}
      />
      <SelectItem
        menuItems={findUniqueItems(developers, "role")}
        label="Role"
        id = "role"
        onChangeElement={captureChange}
        checkSelected={checkFormFilled}
      />
      <SelectItem
        menuItems={findUniqueItems(developers, "status")}
        label="Status"
        id = "status"
        onChangeElement={captureChange}
        checkSelected={checkFormFilled}
      />
      <SelectItem
        menuItems={findUniqueItems(developers, "team")}
        label="Team"
        id = "team"
        onChangeElement={captureChange}
        checkSelected={checkFormFilled}
      />
    </div>
  );
}

export default ModalForm;
