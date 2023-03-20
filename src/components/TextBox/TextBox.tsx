import React, { Dispatch, SetStateAction, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { debounce } from "../../utils/commonUtils";
import { regEx } from "../../config/regexPatterns";

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

  function onBlurEvent(e: any, label:string) {
    if (e.nativeEvent.target.value === "" || !regEx[label.toLocaleLowerCase()].test(e.nativeEvent.target.value)) {
      setIsEmpty(true);
      checkTextFilled(false);
      return
    } else {
      setIsEmpty(false);
      checkTextFilled(true);
      return
    }
  }

  return (
    <div className="my-8">
      <div  className="w-[100%] my-8">
        <TextField fullWidth
          label={label}
          name={id}
          defaultValue={value}
          error={isEmpty}
          onChange={debounce(
            (e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeElement(e, label),
            400
          )}
          onBlur={(e) => onBlurEvent(e, id)}
          size="small"
        />
      </div>
    </div>
  );
}

export default TextBox;
