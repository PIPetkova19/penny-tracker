import { AuthContext } from "../contexts/AuthContext"
import { use, useState } from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import { useTheme } from "@mui/material/styles";

function UpdateUser() {
    const {handleUpdateUser } = use(AuthContext);
    const [password, setPassword] = useState("");
    const theme = useTheme();

    function handleSubmit(e) {
        e.preventDefault();
        handleUpdateUser(password);
        setPassword("");
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
                        backgroundColor: theme.palette.background.paper
                      }}>

            <Box sx={{ pt: { xs: 3, sm: 4, md: 5, lg: 5 } }}>
                <Typography variant="h4" component="h2">
                Change your password
                </Typography>
           </Box>

            <form onSubmit={handleSubmit}>
            <Box sx={{ pt: { xs: 3, sm: 4, md: 5, lg: 5 } }}>
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
                </Box>

                <Box
              sx={{
                pt: { xs: 1, sm: 2, md: 3, lg: 3 },
                pb: { xs: 3, sm: 4, md: 5, lg: 5 }
              }}>
                 <Button color="primary" variant="contained" type="submit"
                sx={{
                  textTransform: 'none',
                  pl: { xs: '70px', sm: '80px', md: '90px', lg: '100px' },
                  pr: { xs: '70px', sm: '80px', md: '90px', lg: '100px' },
                  backgroundColor: theme.palette.customColor
                }}>
                    Submit
                </Button>
                </Box>
            </form>
            </Box>
            </Box>
        </div>
    )
}

export default UpdateUser
