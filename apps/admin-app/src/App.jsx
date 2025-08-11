import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Sign from "./components/Sign";
import Dashboard from "./components/Dashboard";
import PageDemo from "./components/PageDemo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/" element={<Sign></Sign>}></Route> */}
          <Route path="/" element={<PageDemo></PageDemo>}></Route>
          <Route path="*" element={<h1>404 Not Found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
