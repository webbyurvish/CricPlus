import { useDispatch } from "react-redux";
import "./App.css";
import Button from "./components/Button";
import ScoreCard from "./components/ScoreCard";
import { reset } from "./Redux/slices/dataSlice";
import BallOvers from "./components/BallOvers";

function App() {
  const runRows = [];
  const otherRows = [];
  const dispatch = useDispatch();

  for (let i = 0; i <= 6; i++) {
    runRows.push(<Button Value={i} key={i} />);
  }

  const resetAll = () => {
    dispatch(reset());
  };

  otherRows.push(<Button Value={"No Ball"} />);
  otherRows.push(<Button Value={"Wide"} />);
  otherRows.push(<Button Value={"Out"} />);

  return (
    <div>
      <div style={{ marginBottom: "100px" }}>
        <ScoreCard />
      </div>
      <div>{runRows}</div>
      <div>{otherRows}</div>
      <div>
        <BallOvers />
      </div>
      <button onClick={() => resetAll()}>Reset</button>
    </div>
  );
}

export default App;
