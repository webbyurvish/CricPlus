import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";

const ScoreCard = () => {
  const {
    overs,
    innings,
    runs,
    fours,
    matches,
    wickets,
    extras,
    overNumber,
    balls,
  } = useSelector((state: RootState) => state.data);

  console.log({ overs });

  return (
    <div>
      ScoreCard
      <div>Matches: {matches}</div>
      <div>Runs: {runs}</div>
      <div>Fours: {fours}</div>
      <div>Extras: {extras}</div>
      <div>Wickets: {wickets}</div>
      <div>Over No: {overNumber}</div>
      <div>Balls: {balls}</div>
      <div>Innings No.: {innings}</div>
    </div>
  );
};

export default ScoreCard;
