import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface MenuItems {
  menuItems: string[];
  dropdownName: string;
}

function SelectItem({ menuItems, dropdownName }: MenuItems): JSX.Element {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent): void => {
    setAge(event.target.value as string);
  };

  return (
    <div className="my-10">
      <FormControl fullWidth className="my-10" size="small">
        <InputLabel id="demo-simple-select-label">{dropdownName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={dropdownName}
          onChange={handleChange}
        >
          {menuItems.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectItem;
