import { Routes, Route } from "react-router-dom";
import SignUp from "./registration/SignUp";
import LogIn from "./registration/LogIn";
import HomeSignOut from "./main-page/HomeSignOut";
import HomeLoggedIn from "./main-page/HomeLoggedIn";
import AuthProvider, { AuthContext } from "./contexts/AuthContext";
import UpdateUser from "./registration/UpdateUser";
import ResetPassword from "./registration/ResetPassword";
import { useContext } from "react";
import AddExpenses from "./expenses/AddExpenses";
import TrackExpenses from "./expenses/TrackExpenses";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<HomeLoggedIn />} />
        </>
      ) : (
        <>
          <Route path="/" element={<HomeSignOut />} />
        </>
      )}

      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/updateUser" element={<UpdateUser />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/addExpenses" element={<AddExpenses />} />
      <Route path="/trackExpenses" element={<TrackExpenses />} />
    </Routes>
  );
}

export default App;