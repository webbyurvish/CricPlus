import { useDispatch } from "react-redux";
import {
  addNoBall,
  addRuns,
  addWicket,
  addWide,
} from "../Redux/slices/dataSlice";

export interface ButtonProps {
  Value: any;
}

const buttonStyle = {
  border: "2px solid",
};
const Button = ({ Value }: ButtonProps) => {
  const dispatch = useDispatch();
  const addaRuns = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addRuns(Value));
  };

  return (
    <button
      onClick={(e) => {
        switch (Value) {
          case "Out":
            dispatch(addWicket());
            break;
          case "Wide":
            dispatch(addWide());
            break;
          case "No Ball":
            dispatch(addNoBall());
            break;
          default:
            addaRuns(e);
            break;
        }
      }}
      style={buttonStyle}
      value={Value}
    >
      {Value}
    </button>
  );
};

export default Button;
