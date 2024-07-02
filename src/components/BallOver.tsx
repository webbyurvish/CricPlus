export interface BallOverProps {
  over: Array<string>;
}

const BallOver = (props: BallOverProps) => {
  const over = [];
  for (let i = 1; i <= props.over.length; i++) {
    let text = "";
    switch (props.over[i - 1]) {
      case "Out":
        text = "O";
        break;
      case "No Ball":
        text = "NB";
        break;
      case "Wide":
        text = "WD";
        break;
      default:
        text = props.over[i - 1];
        break;
    }
    over.push(<div style={{ display: "flex" }}>{text}</div>);
  }

  return <div style={{ display: "flex", flexDirection: "row" }}>{over}</div>;
};

export default BallOver;
