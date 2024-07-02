import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../Redux/slices/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.data.activeTab);

  console.log({ activeTab });

  // Array of tabs
  const tabs = [
    { label: "Scorecard", value: "scorecard" },
    { label: "Info", value: "info" },
    { label: "Live", value: "live" },
    { label: "Squads", value: "squads" },
    { label: "Overs", value: "overs" },
    { label: "Highlights", value: "highlights" },
  ];

  const handleTabClick = (tabValue) => {
    dispatch(setActiveTab(tabValue));
  };

  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between", // Distribute tabs evenly
      alignItems: "center",
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px 20px", // Adjust padding as needed
    },
    tab: {
      cursor: "pointer",
      padding: "10px 20px",
      transition: "background-color 0.3s ease",
    },
    activeTab: {
      backgroundColor: "#0056b3",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.header}>
      {tabs.map((tab) => (
        <div
          key={tab.value}
          style={{
            ...styles.tab,
            ...(activeTab === tab.value ? styles.activeTab : {}),
          }}
          onClick={() => handleTabClick(tab.value)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default Header;
