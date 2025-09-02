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
        Sign Up
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
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