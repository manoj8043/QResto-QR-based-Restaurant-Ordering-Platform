import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Suspense, lazy } from "react";

// Lazy load routes
const Dashboard = lazy(() => import("./components/Dashboard"));
const Login = lazy(() => import("./components/Login"));
const Sign = lazy(() => import("./components/Sign"));
const Profilepage = lazy(() => import("./components/Profilepage"));
const Authpage = lazy(() => import("./components/Authpage"));
const Menu = lazy(() => import("./components/Menu"));
const Customers = lazy(() => import("./components/Customers"));
const Settings = lazy(() => import("./components/Settings"));
const Orders = lazy(() => import("./components/Orders"));
const MenuManagement = lazy(() => import("./components/MenuManagement"));
const Sales = lazy(() => import("./components/Sales"));
const StaffManagement = lazy(() => import("./components/StaffManagement"));
const Home = lazy(() => import("./pages/userPages/Home"));

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-base-100 transition-colors duration-300">
        {/* Suspense fallback will show while the route component loads */}
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
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
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
