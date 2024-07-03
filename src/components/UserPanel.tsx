import { useSelector } from "react-redux";
import Header from "./Header"; // Import Header component
import ScoreCard from "./ScoreCard";
import BallOvers from "./BallOvers";
import { RootState } from "../Redux/RootState";

const UserPanel = () => {
  const activeTab = useSelector((state: RootState) => state.data.activeTab);
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px", // Optional margin bottom for spacing
      }}
    >
      <Header /> {/* Header component added here */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {activeTab == "scorecard" && <ScoreCard />}
        {activeTab == "overs" && <BallOvers />}
      </div>
    </div>
  );
};

export default UserPanel;
