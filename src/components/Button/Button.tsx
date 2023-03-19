import React from "react";
import MaterialButton from "@mui/material/Button";
import { useAppDispatch } from "../../store/store";
import { changeHeading } from "../../store/slices/modalSlice";

interface Props {
  buttonName: string;
  buttonType?: "text" | "outlined" | "contained" | undefined;
  buttonAction?: "Create" | "Edit" | "Randomize";
  handleModalState: (e: React.MouseEvent<HTMLButtonElement>, isOpen: boolean) => void;
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
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    buttonAction &&
      dispatch(
        changeHeading({ heading: buttonName, modalAction: buttonAction })
      );
    handleModalState(e, !modalState);
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
