import { useTheme } from "@mui/material/styles";
import DashboardSignOut from "../dashboard/DashboardSignOut";

function HomeLoggedIn() {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <DashboardSignOut />
         <h1>logged in</h1>   <h1>logged in</h1>   <h1>logged in</h1>  
    </div>
  );
}

export default HomeLoggedIn
