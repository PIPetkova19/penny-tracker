import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./registration/SignUp";
import LogIn from "./registration/LogIn";
import Home from "./Home";
import AuthProvider, { AuthContext } from "./contexts/AuthContext";
import UpdateUser from "./registration/UpdateUser";
import ResetPassword from "./registration/ResetPassword";
import Switch from '@mui/material/Switch';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContext } from "./contexts/ThemeContext";
import { use } from 'react';

function App() {
    const { mode ,handleChangeSwitch} = use(ThemeContext);
  
  return (
    <>
      <nav>
          <CssBaseline />
          <Switch
            checked={mode}
            onChange={handleChangeSwitch}
            slotProps={{ input: { 'aria-label': 'controlled' } }}
          />
          <Link to="/signup">SignUp</Link> |{" "}
          <Link to="/login">LogIn</Link>
      </nav>

      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/updateUser" element={<UpdateUser />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
