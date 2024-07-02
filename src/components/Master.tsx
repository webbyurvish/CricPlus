import UserPanel from "./UserPanel";
import AdminPanel from "./AdminPanel";

const Master = () => {
  return (
    <div>
      <div
        style={{ display: "flex", height: "100vh", backgroundColor: "#f1f1f1" }}
      >
        <UserPanel />
        <AdminPanel />
      </div>
    </div>
  );
};

export default Master;
