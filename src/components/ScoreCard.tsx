import { useSelector } from "react-redux";
import { RootState } from "../Redux/RootState";

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
    sixes,
  } = useSelector((state: RootState) => state.data);

  console.log({ overs });

  return (
    <div style={styles.container}>
      <div style={styles.scoreCard}>
        <h2 style={styles.header}>ScoreCard</h2>
        <div style={styles.statRow}>
          <span style={styles.label}>Matches:</span> {matches}
        </div>
        <div style={styles.statRow}>
          <span style={styles.label}>Runs:</span> {runs}
        </div>
        <div style={styles.statRow}>
          <span style={styles.label}>Fours:</span> {fours}
        </div>
        <div style={styles.statRow}>
          <span style={styles.label}>Sixes:</span> {sixes}
        </div>
        <div style={styles.statRow}>
          <span style={styles.label}>Extras:</span> {extras}
        </div>
        <div style={styles.statRow}>
          <span style={styles.label}>Wickets:</span> {wickets}
        </div>
        <div style={styles.statRow}>
          <span style={styles.label}>Over No:</span> {overNumber}
        </div>
        <div style={styles.statRow}>
          <span style={styles.label}>Balls:</span> {balls}
        </div>
        <div style={styles.statRow}>
          <span style={styles.label}>Innings No.:</span> {innings}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center", // Center the content horizontally
    alignItems: "flex-start", // Adjust alignment as needed
    padding: "20px",
    backgroundColor: "#f1f1f1",
  },
  scoreCard: {
    backgroundColor: "#f8f9fa",
    border: "1px solid #dee2e6",
    borderRadius: "8px",
    padding: "16px",
    width: "100%", // Take full width of its container
    maxWidth: "600px", // Adjust the max width as needed
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    color: "#343a40",
    marginBottom: "16px",
  },
  statRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    padding: "8px 0",
    borderBottom: "1px solid #dee2e6",
    color: "black",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    color: "#495057",
  },
  ballOversContainer: {
    flex: 1,
    minWidth: "210px", // Set a minimum width to ensure it takes up space
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    border: "1px solid #dee2e6",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default ScoreCard;
