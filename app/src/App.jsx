import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy load routes
const Dashboard = lazy(() => import("./pages/adminPages/Dashboard"));
const Login = lazy(() => import("./pages/authPages/Login"));
const Sign = lazy(() => import("./pages/authPages/Sign"));
const Profilepage = lazy(() => import("./pages/adminPages/Profilepage"));
const Authpage = lazy(() => import("./pages/authPages/Authpage"));
const Customers = lazy(() => import("./pages/adminPages/Customers"));
const Settings = lazy(() => import("./pages/adminPages/Settings"));
const Orders = lazy(() => import("./pages/adminPages/Orders"));
const MenuManagement = lazy(() => import("./pages/adminPages/MenuManagement"));
const Sales = lazy(() => import("./pages/adminPages/Sales"));
const PageDemo = lazy(() => import("./pages/adminPages/PageDemo"));
const StaffManagement = lazy(() =>
  import("./pages/adminPages/StaffManagement")
);
const Home = lazy(() => import("./pages/userPages/Home"));
const ErrorPage = lazy(() => import("./pages/authPages/Errorpage"));

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-base-100 transition-colors duration-300">
        {/* Suspense fallback will show while the route component loads */}
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<Sign />} />
            <Route path="/auth" element={<Authpage />} />
            <Route path="/" element={<PageDemo />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profilepage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/customers"
              element={
                <ProtectedRoute>
                  <Customers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/menu-management"
              element={
                <ProtectedRoute>
                  <MenuManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sales"
              element={
                <ProtectedRoute>
                  <Sales />
                </ProtectedRoute>
              }
            />
            <Route
              path="/staff"
              element={
                <ProtectedRoute>
                  <StaffManagement />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
