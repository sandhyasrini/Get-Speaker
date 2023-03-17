import React from "react";
import Button from "../Button/Button";

function ButtonGroup() {
  return (
    <div className="relative mt-[6rem] flex flex-1 justify-end mx-10">
      <Button buttonName="Create User" buttonType="outlined"/>
      <Button buttonName="Name Randomizer" buttonType="contained"/>
    </div>
  );
}

export default ButtonGroup;
