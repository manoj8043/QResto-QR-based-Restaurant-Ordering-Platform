import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageDemo from "./components/PageDemo";
import Dashboard from "./components/Dashboard"; // Assuming you have a Dashboard component
import Login from "./components/Login"; // Importing the Login component
import Sign from "./components/Sign";
import Profilepage from "./components/Profilepage"; // Importing the Profilepage component
import Authpage from "./components/Authpage"; // Importing the Authpage component
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<PageDemo />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/auth" element={<Authpage />} />
      </Routes>
    </div>
  );
}

export default App;
