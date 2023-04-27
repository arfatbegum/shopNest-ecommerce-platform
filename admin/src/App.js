import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/Pages/ResetPassword/ResetPassword";
import Signin from "./components/Pages/Signin/Signin";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
