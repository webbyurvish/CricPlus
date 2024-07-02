import React from "react";
import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import BallOver from "./BallOver";

const BallOvers = () => {
  const { overs } = useSelector((state: RootState) => state.data);

  const oversRows = [];
  for (let i = 1; i <= overs.length; i++) {
    const over = <BallOver key={i} over={overs[i - 1]} />;
    oversRows.push(over);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {oversRows}
    </div>
  );
};

export default BallOvers;
