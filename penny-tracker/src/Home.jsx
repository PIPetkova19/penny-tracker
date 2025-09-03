import { Button } from "@mui/material";
import { AuthContext } from "./contexts/AuthContext"
import { use } from 'react';
import { useTheme } from "@mui/material/styles";

function Home() {
  const { user, handleSignOut } = use(AuthContext);
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      {user ? (
        <Button variant="outlined" onClick={handleSignOut} style={{ textTransform: 'none' }} >
          Sign out
        </Button>
      ) : (
        <div style={{ color: theme.palette.text.primary }}>home</div>
      )}
    </div>
  );
}

export default Home
