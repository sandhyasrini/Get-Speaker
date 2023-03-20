import { SelectChangeEvent } from "@mui/material/Select";
import React, { useState } from "react";
import Button from "../Button/Button";
import SelectItem from "../SelectItem/SelectItem";

interface Props {
  open?: boolean;
  onChange: (e: SelectChangeEvent<string>,  label: string) => void
  onSubmitForm: () => void
  isDropdownVisible: boolean
 }

function RandomizerForm({ open, onChange, onSubmitForm, isDropdownVisible }: Props) {
  function handleClose() {
}
  return (
    <div>
      {isDropdownVisible && (
        <div>
          <SelectItem
            menuItems={[
              { id: 1, value: "FullStack" },
              { id: 2, value: "Frontend" },
              { id: 3, value: "Backend" },
            ]}
            label="Developers"
            id="developers"
            onChangeElement={onChange}
          />
          <SelectItem
            menuItems={[
              { id: 1, value: "FullStack" },
              { id: 2, value: "Frontend" },
              { id: 3, value: "Backend" },
            ]}
            label="Sorting Order"
            id="sorting_order"
            onChangeElement={onChange}
          />
          <SelectItem
            menuItems={[
              { id: 1, value: "FullStack" },
              { id: 2, value: "Frontend" },
              { id: 3, value: "Backend" },
            ]}
            label="Speaker"
            id="speaker"
            onChangeElement={onChange}
          />
          <div className="flex flex-1">
            <Button
              buttonName="Cancel"
              handleModalState={handleClose}
              modalState={open}
              buttonStyle="outlined"
              isDisabled={false}
              buttonType="InsideModal"
            />
            <Button
              buttonName="Done"
              handleModalState={onSubmitForm}
              modalState={open}
              buttonStyle="contained"
              isDisabled={false}
              buttonType="InsideModal"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomizerForm;
