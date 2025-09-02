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

function SignUp() {
  const { handleSignUp, handleSignUpGoogle } = use(AuthContext);

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
    <div>
      <Typography variant="h4" component="h2">
       Create an account
      </Typography>

 <Typography variant="subtitle1" component="h2">
     Welcome to Penny Tracker. Register as a member.
      </Typography>

      <form onSubmit={formik.handleSubmit}>
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
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
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
        <Button color="primary" variant="contained" fullWidth type="submit"
          style={{ textTransform: 'none' }}>
         Sign Up
        </Button>

        <Typography variant="subtitle1" component="h2">
          Already have an account?{' '}
          <Link to="/login" style={{ textDecoration: 'none' }}>Log in</Link>
        </Typography>

        <Divider>or</Divider>

        <Button
          variant="outlined"
          startIcon={<Google />}
          style={{ textTransform: 'none' }}
          onClick={handleSignUpGoogle}>
          Sign up with Google
        </Button>

      </form>
    </div>
  );
};



export default SignUp