import { Button } from "@mui/material";
import { AuthContext } from "./contexts/AuthContext"
import { use } from 'react';

function Home() {
  const { user, handleSignOut } = use(AuthContext);

  return (
       <div>
      {user ? (
        <Button variant="outlined" onClick={handleSignOut} style={{ textTransform: 'none' }}>
          Sign out
        </Button>
      ) : (
        <div>home</div>
      )}
    </div>
   
  );
}

export default Home
