import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Divider } from '@mui/material';
import Google from "@mui/icons-material/Google";
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import { useTheme } from "@mui/material/styles";

function SignUp() {
  const { handleSignUp, handleSignUpGoogle } = use(AuthContext);
  const theme = useTheme();

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit:
      async (values) => {
        await handleSignUp(values.email, values.password);
      },
  });

  return (
    <div style={{ width: '100%', height: '80vh' }}>
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
            backgroundColor: theme.palette.background.paper
          }}>
          <form onSubmit={formik.handleSubmit}>

            <Box sx={{ pt: { xs: 3, sm: 4, md: 5, lg: 5 } }}>
              <Typography variant="h4" component="h2">
                Create an account
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" component="h2" sx={{
                color: theme.palette.text.secondary
              }}>
                Welcome to Penny Tracker. Register as a member.
              </Typography>
            </Box>

            <Box sx={{ pt: { xs: 3, sm: 4, md: 5, lg: 5 } }}>
              <TextField
                variant="filled"
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
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>

            <Box sx={{ pt: { xs: 1, sm: 2, md: 3, lg: 3 } }}>
              <TextField
                variant="filled"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  },
                }}
                id="password"
                name="password"
                label="Password"
                type="password"
                placeholder='••••••'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>

            <Box sx={{ pt: { xs: 1, sm: 2, md: 3, lg: 3 } }}>
              <Button color="primary" variant="contained" type="submit"
                sx={{
                  textTransform: 'none',
                  pl: { xs: '70px', sm: '80px', md: '90px', lg: '100px' },
                  pr: { xs: '70px', sm: '80px', md: '90px', lg: '100px' },
                  backgroundColor: theme.palette.customColor
                }}>
                Sign Up
              </Button>
            </Box>

            <Box sx={{ pt: { xs: 1, sm: 2, md: 3, lg: 3 } }}>
              <Typography variant="subtitle1" component="h2"
                sx={{ color: theme.palette.text.secondary }}>
                Already have an account?{' '}
                <Link to="/login"
                  style={{
                    textDecoration: 'none',
                    color: theme.palette.customColor
                  }}>
                  Log in
                </Link>
              </Typography>
            </Box>

            <Box sx={{ pt: 2, ml: 5, mr: 5 }}>
              <Divider sx={{ color: theme.palette.text.secondary }}>or</Divider>
            </Box>

            <Box
              sx={{
                pt: { xs: 1, sm: 2, md: 3, lg: 3 },
                pb: { xs: 3, sm: 4, md: 5, lg: 5 }
              }}>
              <Button
                variant="outlined"
                startIcon={<Google />}
                style={{
                  textTransform: 'none',
                  color: theme.palette.customColor,
                  borderColor: theme.palette.customColor
                }}
                onClick={handleSignUpGoogle}>
                Sign up with Google
              </Button>
            </Box>

          </form>
        </Box>
      </Box>
    </div>
  );
};



export default SignUp