import React from "react";
import SelectItem from "../SelectItem/SelectItem";
import TextBox from "../TextBox/TextBox";

function ModalForm() {
  return (
    <div>
      <TextBox label="Name" value="" />
      <TextBox label="email-address" value="" />
      <SelectItem
        menuItems={["FullStack", "Frontend", "Backend"]}
        label="Role"
      />
      <SelectItem
        menuItems={["Full-time", "Part-time", "Contractor"]}
        label="Status"
      />
      <SelectItem menuItems={["Team-A", "Team-B", "Team-C"]} label="Team" />
    </div>
  );
}

export default ModalForm;
