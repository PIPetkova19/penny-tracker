import Box from '@mui/material/Box';
import { use } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import Typography from '@mui/material/Typography';
import DashboardLoggedIn from "../dashboard/DashboardLoggedIn";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { supabase } from "../supabase/supabase-client";

function TrackExpenses() {
    const { expense, setExpense, isLoading } = use(AuthContext);

    async function deleteExpenses(id) {
        const { data, error } = await supabase
            .from('expenses')
            .delete()
            .eq('id', id);

        if (error) {
            console.log(error);
            return;
        }
        setExpense(expense.filter(item => item.id !== id));
    }

    const listItems = (expense || []).map((item, index) => (
        <ListItem key={index} divider secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => deleteExpenses(item.id)}>
                <DeleteIcon />
            </IconButton>
        }>
            <ListItemText primary={`Title: ${item.title}`}
                secondary={`Amount: ${item.amount} | Date: ${item.date} | Category: ${item.category}`} />
        </ListItem>
    ))

    return (
        <div style={{
            width: '100%', height: '100vh', overflowY: 'scroll'
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
                {isLoading ? (
                    <p>loading</p>
                ) : listItems.length ? (
                    <List>{listItems}</List>
                ) : (
                    <p>no items</p>
                )}
            </Box>
        </div>
    )
}

export default TrackExpenses