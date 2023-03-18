import React from "react";

function ModalList() {
  const names = ["sandhya", "swetha", "Lina", "Melina"];
  return (
    <div>
      <span className="text-gray-500 text-[0.9rem]">List Result:</span>
      <div className="flex flex-col m-4">
        {names.map((name, index) => {
          return <ul className="py-3" key={index}>{index+1}{". "}{name}</ul>;
        })}
      </div>
    </div>
  );
}

export default ModalList;
