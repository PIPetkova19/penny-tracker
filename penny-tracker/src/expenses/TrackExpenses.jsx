import Box from '@mui/material/Box';
import { use } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import Typography from '@mui/material/Typography';
import DashboardLoggedIn from "../dashboard/DashboardLoggedIn";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function TrackExpenses() {
    const { expense } = use(AuthContext);

    const listItems = expense.map((item, index) => (
        <ListItem key={index}>
            <ListItemText primary={item.title}
                secondary={`${item.amount} | ${item.date}| ${item.category}`} />
        </ListItem>
    ))

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

                <List sx={{ width: '600px', maxWidth: '1000px' }}>
                    {listItems}
                </List>
            </Box>
        </div>
    )
}

export default TrackExpenses