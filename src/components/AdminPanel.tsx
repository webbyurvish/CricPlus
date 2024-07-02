import React from "react";
import Button from "./Button";
import { reset } from "../Redux/slices/dataSlice";
import { useDispatch } from "react-redux";

const AdminPanel = () => {
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
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#e9ecef",
      }}
    >
      <div style={{ marginBottom: "20px" }}>{runRows}</div>
      <div style={{ marginBottom: "20px" }}>{otherRows}</div>

      <button
        onClick={() => resetAll()}
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "#ffffff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default AdminPanel;
