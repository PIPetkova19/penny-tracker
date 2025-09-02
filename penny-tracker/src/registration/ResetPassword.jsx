import { AuthContext } from "../contexts/AuthContext"
import { use, useState } from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';

function ResetPassword() {
    const { handleResetPass } = use(AuthContext);
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        handleResetPass(email);
        setEmail("");
    }

    return (
        <>
            <Typography variant="h4" component="h2">
                Reset password
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

                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </>
    )
}

export default ResetPassword
