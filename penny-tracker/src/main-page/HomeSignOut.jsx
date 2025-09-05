import { useTheme } from "@mui/material/styles";
import DashboardLoggedIn from "../dashboard/DashboardLoggedIn";

function HomeSignOut() {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <DashboardLoggedIn />
   <h1>signed out </h1>     <h1>signed out </h1>     <h1>signed out </h1>  
    </div>
  );
}

export default HomeSignOut
