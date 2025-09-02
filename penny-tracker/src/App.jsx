import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./registration/SignUp";
import LogIn from "./registration/LogIn";
import Home from "./Home";
import AuthProvider, { AuthContext } from "./contexts/AuthContext";

function App() {

  return (
    <>


      <nav>
        <Link to="/signup">SignUp</Link> |{" "}
        <Link to="/login">LogIn</Link>
      </nav>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </AuthProvider>

    </>
  )
}

export default App
