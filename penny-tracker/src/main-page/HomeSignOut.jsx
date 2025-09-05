import { useTheme } from "@mui/material/styles";
import DashboardSignedOut from "../dashboard/DashboardSignedOut";
import { Box } from "@mui/material";

//Intro page
function HomeSignOut() {
  const theme = useTheme();

  return (
    <Box
      style={{
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        minHeight: "100vh",
      }}>

      <DashboardSignedOut />

      <Box sx={{ flex: 2, m: 5, pt: 10 }}>
       <h1>signed out</h1>  
      </Box>
    </Box>
  );
}

export default HomeSignOut
