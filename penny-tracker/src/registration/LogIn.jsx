import { AuthContext } from "../contexts/AuthContext"
import { use,useState } from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
function LogIn() {
  const { handleSignIn } = use(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   function handleSubmit(e) {
        e.preventDefault();
        handleSignIn(email, password);
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
           onChange={(e)=>setPassword(e.target.value)}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </>
  )
}

export default LogIn
