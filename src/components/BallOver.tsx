import React from "react";

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
    over.push(
      <div
        key={i}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          margin: "5px",
          backgroundColor: "#28a745", // Green background color
          color: "#ffffff", // White text color
          fontWeight: "bold",
        }}
      >
        {text}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: "10px",
      }}
    >
      {over}
    </div>
  );
};

export default BallOver;
