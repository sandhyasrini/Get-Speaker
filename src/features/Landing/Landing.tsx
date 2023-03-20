import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Navbar from "../../components/Navbar/Navbar";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import { useAppDispatch } from "../../store/store";
import { getDeveloperList } from "../../store/slices/developerSlice";

function Landing() {
  const dispatch = useAppDispatch();

  dispatch(getDeveloperList());
  return (
    <section>
      <Navbar />
      <ButtonGroup
        firstButtonName="Name Randomizer"
        secondButtonName="Create New User"
      />
      <Dashboard />
    </section>
  );
}

export default Landing;
