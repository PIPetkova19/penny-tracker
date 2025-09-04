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
import Box from '@mui/material/Box';
import { useTheme } from "@mui/material/styles";

function LogIn() {
  const { handleSignIn, handleSignUpGoogle } = use(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();

  function handleSubmit(e) {
    e.preventDefault();
    handleSignIn(email, password);
  }
  
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: '100%'
        }}>

        <Box
          sx={{
           boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            borderRadius: '8%',
            width: { xs: '70%', sm: '50%', md: '40%', lg: '30%' },
            minHeight: 'auto',
            backgroundColor:theme.palette.background.paper
          }}>

          <form onSubmit={handleSubmit} >
            <Box sx={{ pt: { xs: 3, sm: 4, md: 5, lg: 5 } }}>
              <Typography variant="h4" component="h2">
                Welcome back!
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" component="h2"
                sx={{
                  color: theme.palette.text.secondary
                }}>
                Please enter your details to log in.
              </Typography>
            </Box>

            <Box sx={{
              pt: { xs: 3, sm: 4, md: 5, lg: 5 }
            }}>
              <TextField variant="filled"
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
            </Box>

            <Box sx={{
              pt: { xs: 1, sm: 2, md: 3, lg: 3 }
            }}>
              <TextField variant="filled"
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
            </Box>

            <Box sx={{
              pt: { xs: 1, sm: 2, md: 3, lg: 3 }
            }}>
              <Button color="primary" variant="contained" type="submit"
                sx={{
                  textTransform: 'none',
                  pl: { xs: '70px', sm: '80px', md: '90px', lg: '100px' },
                  pr: { xs: '70px', sm: '80px', md: '90px', lg: '100px' },
                  backgroundColor: theme.palette.customColor
                }}>
                Log In
              </Button>
            </Box>

            <Box sx={{
              pt: { xs: 1, sm: 2, md: 3, lg: 3 }
            }}>
              <Link to="/resetPassword"
                style={{
                  textDecoration: 'none',
                  color: theme.palette.customColor,
                }}>
                Forgot password?
              </Link>
            </Box>

            <Box sx={{ pt: 2, ml: 5, mr: 5 }}>
              <Divider sx={{ color: theme.palette.text.secondary }}>or</Divider>
            </Box>

            <Box sx={{ pt: { xs: 1, sm: 2, md: 3, lg: 3 } }}>
              <Button
                variant="outlined"
                startIcon={<Google />}
                style={{
                  textTransform: 'none',
                  color: theme.palette.customColor,
                  borderColor: theme.palette.customColor
                }}
                onClick={handleSignUpGoogle}>
                Continue with Google
              </Button>
            </Box>

            <Box sx={{
              pt: { xs: 3, sm: 4, md: 5, lg: 5 },
              pb: { xs: 3, sm: 4, md: 5, lg: 5 }
            }}>
              <Typography variant="subtitle1" component="h2"
                sx={{ color: theme.palette.text.secondary }}>
                Don't have an account?{' '}
                <Link to="/signup"
                  style={{
                    textDecoration: 'none',
                    color: theme.palette.customColor
                  }}>Sign up</Link>
              </Typography>
            </Box>

          </form>
        </Box>
      </Box>
    </div>
  )
}

export default LogIn
