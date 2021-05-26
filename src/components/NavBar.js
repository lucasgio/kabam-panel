import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "@material-ui/core";

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
            variant="h6" 
            style={{
                flexGrow:'1'
            }}
        >
            Kanban Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
