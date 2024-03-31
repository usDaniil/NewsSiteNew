import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { FC } from "react";

export const TopPanel:FC = () => {
    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News Site
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
}