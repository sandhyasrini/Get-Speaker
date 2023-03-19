import React, { Dispatch, SetStateAction, useState } from "react";
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { debounce } from "../../utils/commonUtils";

interface Props {
  label: string;
  value: string;
  id: string;
  checkTextFilled: Dispatch<SetStateAction<boolean>>;
  onChangeElement?: (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string> | null,
    label: string
  ) => void;
}

function TextBox({
  label,
  value,
  id,
  onChangeElement,
  checkTextFilled,
}: Props) {
  const [isEmpty, setIsEmpty] = useState(false);

  function onBlurEvent(e: any) {
    if (e.nativeEvent.target.value === "") {
      setIsEmpty(true);
      checkTextFilled(false);
    } else {
      setIsEmpty(false);
      checkTextFilled(true);
    }
  }

  return (
    <div className="my-8">
      <FormControl fullWidth className="my-10" size="small">
        <TextField
          label={label}
          name={id}
          defaultValue={value}
          error={isEmpty}
          onChange={debounce(
            (e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeElement(e, label),
            400
          )}
          onBlur={onBlurEvent}
          size="small"
        />
      </FormControl>
    </div>
  );
}

export default TextBox;
