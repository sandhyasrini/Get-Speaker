import { SelectChangeEvent } from "@mui/material/Select";
import React, { useState } from "react";
import { developer } from "../../store/slices/developerSlice";
import { useAppSelector } from "../../store/store";
import { getRandomNames, shuffleValues } from "../../utils/commonUtils";
import RandomizerForm from "./RandomizerForm";
interface Props {
  onSubmitForm: () => void
  isDropdownVisible: boolean
 }
function ModalList({onSubmitForm, isDropdownVisible}: Props) {
  const developers = useAppSelector((state) => state.developer.developers);
  const [dropDownData, setDropDownData] = useState({
    developers: "",
    sorting_order: "",
    speaker: "",
  });


  const onChange = (e: SelectChangeEvent<string>, label: string): void => {
    setDropDownData({ ...dropDownData, [label]: e.target.value });
  };
  const randomNames =
    developers.length > 5
      ? getRandomNames(developers, 5)
      : shuffleValues(developers);
  return (
    <div>
      <RandomizerForm
        onChange={onChange}
        onSubmitForm={onSubmitForm}
        isDropdownVisible={isDropdownVisible}
      />
      {!isDropdownVisible && (
        <section>
          <span className="text-gray-500 text-[0.9rem]">List Result:</span>
          <div className="flex flex-col m-4">
            {randomNames.map((developer: developer, index: number) => {
              return (
                <span className="py-3" key={index}>
                  {index + 1}
                  {". "}
                  {developer.name}
                </span>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

export default ModalList;
