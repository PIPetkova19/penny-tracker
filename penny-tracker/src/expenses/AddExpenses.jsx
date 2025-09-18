import Button from "@mui/material/Button";
import { Divider, FormGroup } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from "@mui/material/styles";
import { use, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AuthContext } from "../contexts/AuthContext";
import Typography from '@mui/material/Typography';
import DashboardLoggedIn from "../dashboard/DashboardLoggedIn";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';

function AddExpense() {
    const theme = useTheme();
    const [expenseTitle, setExpenseTitle] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState(null);
    const [expenseCategory, setExpenseCategory] = useState('');
    const { user, handleAddExpense } = use(AuthContext);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose} >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    function handleSubmit(e) {
        e.preventDefault();
        handleAddExpense(expenseTitle, expenseAmount, expenseDate, expenseCategory);
    }

    return (
        <div style={{
            width: '100%', height: '100vh'
        }}>
            <DashboardLoggedIn />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    height: '100%'
                }}>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ pt: { xs: 3, sm: 4, mb: 5, lg: 5 } }}>
                        <Typography variant="h4" component="h2">
                            Add Expense
                        </Typography>
                    </Box>
                    <FormGroup>
                        <FormControl sx={{ mt: 2, mb: 5 }}>
                            <InputLabel htmlFor="expenseTitle">Title</InputLabel>
                            <Input
                                id="expenseTitle"
                                value={expenseTitle}
                                onChange={(e) => setExpenseTitle(e.target.value)} />
                        </FormControl>

                        <FormControl sx={{ mb: 5 }}>
                            <InputLabel htmlFor="expenseAmount">Amount</InputLabel>
                            <Input
                                id="expenseAmount"
                                value={expenseAmount}
                                onChange={(e) => setExpenseAmount(e.target.value)} />
                        </FormControl>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Date"
                                value={expenseDate}
                                onChange={(newValue) => setExpenseDate(newValue)}
                            />
                        </LocalizationProvider>

                        {/*napr tablica */}
                        <FormControl sx={{ mt: 5 }}>
                            <InputLabel id="expenseCategory">Category</InputLabel>
                            <Select
                                labelId="expenseCategory"
                                id="expenseCategory"
                                value={expenseCategory}
                                onChange={(e) => setExpenseCategory(e.target.value)}
                            >
                                <MenuItem value="food">Food</MenuItem>
                                <MenuItem value="transport">Transport</MenuItem>
                                <MenuItem value="shopping">Shopping</MenuItem>
                                <MenuItem value="utility">Utility</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </FormGroup>

                    <Box sx={{ pt: 2, ml: 1, mr: 1 }}>
                        <Divider sx={{ color: theme.palette.text.secondary }} />
                    </Box>
                    {/*snackbar */}
                    <Button color="primary" variant="contained" type="submit" fullWidth
                        sx={{
                            textTransform: 'none',
                            pl: { xs: '70px', sm: '80px', md: '90px', lg: '100px' },
                            pr: { xs: '70px', sm: '80px', md: '90px', lg: '100px' },
                            mt: 2,
                            backgroundColor: theme.palette.customColor
                        }}
                        onClick={handleClick}>
                        Submit
                    </Button>
                    <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Expense Added"
                        action={action}
                    />
                </form>
            </Box>
        </div>
    )
}

export default AddExpense