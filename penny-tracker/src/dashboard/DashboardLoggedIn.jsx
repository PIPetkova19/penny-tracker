
import { Link } from "react-router-dom";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MaterialUISwitch from "../contexts/MaterialUISwitch";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContext } from "../contexts/ThemeContext";
import { use } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import Button from "@mui/material/Button";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from "@mui/material/styles";
import { Divider } from '@mui/material';

const drawerWidth = 240;

function DashboardSignOut(props) {
    const { mode, handleChangeSwitch } = use(ThemeContext);
    const { handleSignOut } = use(AuthContext);
    const theme = useTheme();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                height: '100%',
            }}>
            <Box>
                <Typography variant="h6"
                    sx={{
                        color: theme.palette.customColor
                    }}>
                    Penny Tracker
                </Typography>
            </Box>

            <Box sx={{ width: '100%' }}>
                <Divider sx={{ backgroundColor: theme.palette.text.secondary }} />
            </Box>

            <Box>
                <Button type="text" >
                    <Link to="/addExpense"
                        style={{
                            textDecoration: 'none',
                            textTransform: 'none',
                            color: theme.palette.text.primary
                        }} >
                        Add Expenses
                    </Link>
                </Button>
            </Box>

            <Box sx={{ mt: "auto", mb: 2 }}>
                <Button
                    variant="contained"
                    onClick={handleSignOut}
                    style={{
                        textTransform: 'none',
                        backgroundColor: theme.palette.customColor
                    }}>
                    Sign out
                </Button>
            </Box>
        </Box >
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <>
            <CssBaseline />
            <Box sx={{ display: 'flex' }}>
                <AppBar component="nav"
                    sx={{ backgroundColor: theme.palette.background.paper }}>
                    <Toolbar >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                mr: 2, display: { sm: 'none' }
                            }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', sm: 'block' },
                                color: theme.palette.customColor
                            }}
                        >
                            Penny Tracker
                        </Typography>

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Button variant="outlined"
                                sx={{
                                    borderColor: theme.palette.customColor,
                                    mr: 2
                                }}>
                                <Link to="/addExpenses"
                                    style={{
                                        textDecoration: 'none',
                                        textTransform: 'none',
                                        color: theme.palette.customColor
                                    }}>
                                    Add Expenses
                                </Link>
                            </Button>
                        </Box>

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Button variant="outlined"
                                sx={{
                                    borderColor: theme.palette.customColor,
                                    mr: 2
                                }}>
                                <Link to="/trackExpenses"
                                    style={{
                                        textDecoration: 'none',
                                        textTransform: 'none',
                                        color: theme.palette.customColor
                                    }}>
                                    Track Expenses
                                </Link>
                            </Button>
                        </Box>

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Button variant="outlined" onClick={handleSignOut}
                                sx={{
                                    borderColor: theme.palette.customColor,
                                    mr: 2
                                }}>
                                <Link to="/login"
                                    style={{
                                        textDecoration: 'none',
                                        textTransform: 'none',
                                        color: theme.palette.customColor
                                    }}>
                                    Sign Out
                                </Link>
                            </Button>
                        </Box>

                        <Box sx={{ ml: "auto" }}>
                            <FormGroup>
                                <FormControlLabel control={
                                    <MaterialUISwitch
                                        sx={{ ml: 1 }}
                                        checked={mode}
                                        onChange={handleChangeSwitch} />} />
                            </FormGroup>
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>

            </Box>
        </>
    )
}

export default DashboardSignOut