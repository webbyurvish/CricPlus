import { Route, Routes } from "react-router";
import "./App.css";
import Master from "./components/Master";
import AddMatchForm from "./adminPanel/AddMatchForm";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Master />} path="/" />
        <Route element={<AddMatchForm />} path="/admin/addmatch" />
      </Routes>
    </div>
  );
}

export default App;
