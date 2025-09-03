import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./registration/SignUp";
import LogIn from "./registration/LogIn";
import Home from "./Home";
import AuthProvider, { AuthContext } from "./contexts/AuthContext";
import UpdateUser from "./registration/UpdateUser";
import ResetPassword from "./registration/ResetPassword";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContext } from "./contexts/ThemeContext";
import { use } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MaterialUISwitch from './contexts/MaterialUISwitch';

function App() {
  const { mode, handleChangeSwitch } = use(ThemeContext);

  return (
    <>
      <nav>
        <CssBaseline />
        <FormGroup>
          <FormControlLabel control={
            <MaterialUISwitch
              sx={{ ml: 1, mt:1 }}
              checked={mode}
              onChange={handleChangeSwitch} />} />
        </FormGroup>

        <Link to="/login">Log In</Link>|{" "}
        <Link to="/signup">Get Started</Link>
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
