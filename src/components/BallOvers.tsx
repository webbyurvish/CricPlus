import { RootState } from "@reduxjs/toolkit/query";
import React from "react";
import { useSelector } from "react-redux";
import BallOver from "./BallOver";

const BallOvers = () => {
  const { overs } = useSelector((state: RootState) => state.data);
  console.log({ overs });

  const newover = ["0", "1", "0", "2", "3", "4"];

  const oversRows = [];
  for (let i = 1; i <= overs.length; i++) {
    const over = <BallOver key={i} over={overs[i - 1]} />;
    oversRows.push(over);
  }

  return <div>{oversRows}</div>;
};

export default BallOvers;
