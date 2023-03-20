import React from "react";
import { developer } from "../../store/slices/developerSlice";
import { useAppSelector } from "../../store/store";
import { getRandomNames, shuffleValues } from "../../utils/commonUtils";
import RandomizerForm from "./RandomizerForm";

function ModalList() {
const developers = useAppSelector(state => state.developer.developers)
  const randomNames =developers.length > 5 ? getRandomNames(developers,  5) : shuffleValues(developers);
  return (
    <div>
      <RandomizerForm />
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
    </div>
  );
}

export default ModalList;
