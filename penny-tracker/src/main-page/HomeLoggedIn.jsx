import { useTheme } from "@mui/material/styles";
import DashboardLoggedIn from "../dashboard/DashboardLoggedIn";
import { Box } from "@mui/material";

//main page
function HomeLoggedIn() {
  const theme = useTheme();

  return (
    <Box
      style={{
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        minHeight: "100vh",
      }}>
      <DashboardLoggedIn />

      <Box sx={{ flex: 2, m: 5, pt: 10 }}>
        <h1>logged in</h1>   <h1>logged in</h1>
      </Box>
    </Box>
  );
}

export default HomeLoggedIn
