import React, { useState } from "react";
import Button from "../Button/Button";
import SelectItem from "../SelectItem/SelectItem";

interface Props {
    open?: boolean;
  } 

function RandomizerForm({ open}: Props) {
    const [isDropDownVisible, setDropdownVisibility] = useState(true)

    function onSubmitForm() {
        setDropdownVisibility(false)
    }
function onChange() {
}
    function handleClose()
    {
        console.log("Handle close")
    }
  return (
    <div >
    { isDropDownVisible && 
    <div>
      <SelectItem menuItems={[{value:"FullStack"}, {value: "Frontend"}, {value: "Backend"}]} label="Developers" id="role" onChangeElement={onChange} />
      <SelectItem menuItems={[{value:"FullStack"}, {value: "Frontend"}, {value: "Backend"}]} label="Sorting Order" id="role"  onChangeElement={onChange} />
      <SelectItem menuItems={[{value:"FullStack"}, {value: "Frontend"}, {value: "Backend"}]} label="Speaker" id="role"  onChangeElement={onChange} />
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
   }
    </div>
  );
}

export default RandomizerForm;
