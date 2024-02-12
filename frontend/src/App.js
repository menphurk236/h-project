import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import UploadP from "./components/UploadP";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/uploadP" element={<UploadP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;