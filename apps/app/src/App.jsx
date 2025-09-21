import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import PageDemo from "./components/PageDemo";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Sign from "./components/Sign";
import Profilepage from "./components/Profilepage";
import Authpage from "./components/Authpage";
import Menu from "./components/Menu";
import Customers from "./components/Customers";
import Settings from "./components/Settings";
import Orders from "./components/Orders";
import MenuManagement from "./components/MenuManagement";
import Sales from "./components/Sales";
import StaffManagement from "./components/StaffManagement";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-base-100 transition-colors duration-300">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<PageDemo />} />
          <Route path="/signin" element={<Sign />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/auth" element={<Authpage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menu-management" element={<MenuManagement />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/staff" element={<StaffManagement />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
