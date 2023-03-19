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
}

function SelectItem({ menuItems, label }: MenuItems): JSX.Element {
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

  const handleChange = (event: SelectChangeEvent): void => {
    setDropDownValue(event.target.value as string);
  };

  return (
    <div className="my-8">
      <FormControl fullWidth className="my-10" size="small">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dropdownValue}
          label={label}
          onChange={handleChange}
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
