import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import React from "react";

interface Props {
  label: string;
  value: string
}

function TextBox({ label, value }: Props) {
  return (
    <div className="my-10">
      <FormControl fullWidth className="my-10" size="small">
        <TextField
          label={label}
          id="outlined-size-small"
          defaultValue={value}
          size="small"
        />
      </FormControl>
    </div>
  );
}

export default TextBox;
