import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopRegistrationPage from "./components/ShopRegistration";
import LoginPage from "./components/LoginPage";   // ✅ Fixed name
import Dashboard from "./components/Dashboard"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/ShopRegister" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;   // ✅ Added export
