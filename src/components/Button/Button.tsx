import React from "react";
import  MaterialButton from '@mui/material/Button';


interface Props {
    buttonName: string;
    buttonType?: "text" | "outlined" | "contained" | undefined;
}

function Button({buttonName, buttonType}: Props): JSX.Element {
  return (
    <div className="px-1 h-10">
      <MaterialButton variant={buttonType}>{buttonName}</MaterialButton>
    </div>
  );
}

export default Button;
