import { useTheme } from "@mui/material/styles";
import  Dashboard  from "./Dashboard";

function Home() {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <Dashboard/>
    </div>
  );
}

export default Home
