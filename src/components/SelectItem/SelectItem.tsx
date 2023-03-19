import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppSelector } from "../../store/store";
import { developer } from "../../store/slices/developerSlice";

interface MenuItems {
  menuItems: any[];
  label: string;
  id: string;
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
}: MenuItems): JSX.Element {
  const [dropdownValue, setDropDownValue] = React.useState("");
  const developer = useAppSelector(
    (state) => state.developer.selectedDeveloper
  ) as developer;
  const modalDetails = useAppSelector((state) => state.modal);

  useEffect(() => {
    if (modalDetails.modalAction === "Edit") {
      setDropDownValue(developer[label.toLocaleLowerCase()]);
    }
  }, [modalDetails]);

  const handleChange = (event: SelectChangeEvent, label: string): void => {
    console.log("inside change");
    setDropDownValue(event.target.value as string);
    onChangeElement(event, label);
  };

  return (
    <div className="my-8">
      <FormControl fullWidth className="my-10" size="small">
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          name={id}
          value={dropdownValue}
          label={label}
          onChange={(e) => handleChange(e, id)}
        >
          {menuItems.map((item, index) => {
            return (
              <MenuItem key={item.id} value={item.value}>
                {item.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectItem;
