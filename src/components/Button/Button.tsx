import React, { Dispatch, SetStateAction } from "react";
import MaterialButton from "@mui/material/Button";
import { useAppDispatch } from "../../store/store";
import { changeHeading } from "../../store/slices/modalSlice";

interface Props {
  buttonName: string;
  buttonType?: "text" | "outlined" | "contained" | undefined;
  buttonAction: "Create" | "Edit" | "Randomize";
  handleModalState: Dispatch<SetStateAction<boolean>>;
  modalState: boolean;
}

function Button({
  buttonName,
  buttonType,
  handleModalState,
  modalState,
  buttonAction,
}: Props): JSX.Element {
  const dispatch = useAppDispatch();
  function handleClick() {
    console.log("handling click");
    dispatch(changeHeading({ heading: buttonName, modalAction: buttonAction }));
    handleModalState(!modalState);
  }

  return (
    <div className="px-1 h-10">
      <MaterialButton onClick={handleClick} variant={buttonType}>
        {buttonName}
      </MaterialButton>
    </div>
  );
}

export default Button;
