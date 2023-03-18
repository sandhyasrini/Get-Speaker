import React, { useState } from "react";
import Button from "../Button/Button";
import OpenModal from "../Modal/OpenModal";

function ButtonGroup() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
    
  return (
    <div className="relative mt-[6rem] flex flex-1 justify-end mx-10">
      <Button
        buttonName="Create User"
        buttonType="outlined"
        handleModalState={handleOpen}
        modalState={open}
        buttonAction="Create"
      />
      <Button
        buttonName="Name Randomizer"
        buttonType="contained"
        handleModalState={handleOpen}
        modalState={open}
        buttonAction="Randomize"
      />
      <OpenModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default ButtonGroup;
