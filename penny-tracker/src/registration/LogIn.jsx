import { AuthContext } from "../contexts/AuthContext"
import { use, useState } from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Google from "@mui/icons-material/Google";
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from "react-router-dom";

function LogIn() {
  const { handleSignIn, handleSignUpGoogle } = use(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSignIn(email, password);
  }
  return (
    <>
      <Typography variant="h4" component="h2">
       Welcome back!
      </Typography>

   <Typography variant="subtitle1" component="h2">
       Please enter your details to log in.
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
          id="email"
          name="email"
          label="Email"
          placeholder='your@email.com'
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            },
          }} id="password"
          name="password"
          label="Password"
          type="password"
          placeholder='••••••'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button color="primary" variant="contained" fullWidth type="submit"
            style={{ textTransform: 'none' }}>
          Log In
        </Button>

        <Link to="/resetPassword" style={{ textDecoration: 'none' }}>
          Forgot password?
        </Link>

        <Divider>or</Divider>

        <Button
          variant="outlined"
          startIcon={<Google />}
          style={{ textTransform: 'none' }}
          onClick={handleSignUpGoogle}>
          Continue with Google
        </Button>

        <Typography variant="subtitle1" component="h2">
          Don't have an account?{' '}
          <Link to="/signup" style={{ textDecoration: 'none' }}>Sign up</Link>
        </Typography>

      </form>
    </>
  )
}

export default LogIn
