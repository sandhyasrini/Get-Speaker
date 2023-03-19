import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { debounce } from "../../utils/commonUtils";

interface Props {
  label: string;
  value: string;
  id: string;
  onChangeElement?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | SelectChangeEvent<string>
      | null,
    label: string
  ) => void;
}

function TextBox({ label, value, id, onChangeElement }: Props) {
  return (
    <div className="my-8">
      <FormControl fullWidth className="my-10" size="small">
        <TextField
          label={label}
          name={id}
          defaultValue={value}
          onChange={debounce(
            (e: React.ChangeEvent<HTMLInputElement>) => onChangeElement(e, label),
            400
          )}
          size="small"
        />
      </FormControl>
    </div>
  );
}

export default TextBox;
