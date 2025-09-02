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

function UpdateUser() {
    const {handleUpdateUser } = use(AuthContext);
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        handleUpdateUser(password);
        setPassword("");
    }
    return (
        <>
            <Typography variant="h4" component="h2">
               Change your password
            </Typography>

            <form onSubmit={handleSubmit}>
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
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </>
    )
}

export default UpdateUser
