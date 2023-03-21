import React, {
  Dispatch,
  FocusEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppSelector } from "../../store/store";
import { developer } from "../../store/slices/developerSlice";
import { FormHelperText } from "@mui/material";

interface MenuItems {
  menuItems: any[];
  label: string;
  id: string;
  checkSelected?: Dispatch<SetStateAction<any>>;
  filledData?: {};
  defaultValue?: string;
  onChangeElement?: (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent | null,
    label: string
  ) => void;
}

function SelectItem({
  menuItems,
  label,
  id,
  onChangeElement,
  checkSelected,
  defaultValue,
  filledData,
}: MenuItems): JSX.Element {
  const [dropdownValue, setDropDownValue] = useState(
    defaultValue ? defaultValue : ""
  );
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const developer = useAppSelector(
    (state) => state.developer.selectedDeveloper
  ) as developer;
  const modalDetails = useAppSelector((state) => state.modal);

  useEffect(() => {
    if (modalDetails.modalAction === "Edit") {
      setDropDownValue(developer[label.toLocaleLowerCase()]);
    }
  }, [modalDetails]);

  const handleOnChange = (e: SelectChangeEvent, label: string) => {
    setError(false);
    setHelperText("");
    setDropDownValue(e.target.value as string);
    onChangeElement(e, label);
    checkSelected && checkSelected({ ...filledData, [label]: true });
  };

  const handleOnBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (dropdownValue === "") {
      setHelperText("Select a value from the dropbox");
      setError(true);
    }
  };

  return (
    <div className="my-8">
      <FormControl fullWidth className="my-10" size="small">
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          onBlur={(e) => handleOnBlur(e)}
          labelId="demo-simple-select-label"
          name={id}
          error={error}
          value={dropdownValue}
          label={label}
          onChange={(e) => handleOnChange(e, id)}
        >
          {menuItems.map((item, index) => {
            return (
              <MenuItem key={item.id} value={item.value}>
                {item.value}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default SelectItem;
