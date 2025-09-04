import { Routes, Route } from "react-router-dom";
import SignUp from "./registration/SignUp";
import LogIn from "./registration/LogIn";
import Home from "./Home";
import AuthProvider, { AuthContext } from "./contexts/AuthContext";
import UpdateUser from "./registration/UpdateUser";
import ResetPassword from "./registration/ResetPassword";
import Dashboard from './Dashboard'
function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/updateUser" element={<UpdateUser />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
