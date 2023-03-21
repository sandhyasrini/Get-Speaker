import { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import {  randomizerDropdown } from "../../config/constants";
import Button from "../Button/Button";
import SelectItem from "../SelectItem/SelectItem";

interface Props {
  open?: boolean;
  onChange: (e: SelectChangeEvent<string>, label: string) => void;
  onSubmitForm: () => void;
  isDropdownVisible: boolean;
}

const RandomizerForm = ({
  open,
  onChange,
  onSubmitForm,
  isDropdownVisible,
}: Props) => {
  function handleClose() {}
  return (
    <div>
      {isDropdownVisible && (
        <div>
          <SelectItem
            menuItems={randomizerDropdown.developer}
            defaultValue={randomizerDropdown.developer[0].value}
            label="Developers"
            id="developers"
            onChangeElement={onChange}
          />
          <SelectItem
            menuItems={randomizerDropdown.sorting_order}
            defaultValue={randomizerDropdown.sorting_order[0].value}
            label="Sorting Order"
            id="sorting_order"
            onChangeElement={onChange}
          />
          <SelectItem
            menuItems={randomizerDropdown.speaker}
            defaultValue={randomizerDropdown.speaker[0].value}
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
