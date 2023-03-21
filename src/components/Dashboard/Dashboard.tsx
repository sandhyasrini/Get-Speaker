import React from "react";
import { useAppSelector } from "../../store/store";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Error from "../Error/Error";
import Navbar from "../Navbar/Navbar";
import Table from "../Table/Table";

function Dashboard() {
  const state = useAppSelector((state) => state);
  return (
    <div>
        {state.developer.isError && <Error />}
      {!state.developer.isError && (state.developer.isLoading ? (
        <div className="w-[100%] h-[100vh] fixed z-1 bg-[rgba(0, 0, 0, 0.834)] justify-center left-[50%] top-[50%] font-bold text-2xl">Loading...</div>
      ) : (
        <div className="font-calibre">
          <Navbar />
          <ButtonGroup
            firstButtonName="Name Randomizer"
            secondButtonName="Create New User"
          />
          <Table />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
