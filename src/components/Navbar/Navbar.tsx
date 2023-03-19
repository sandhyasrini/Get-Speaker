import { IconButton, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Search } from "@mui/icons-material";


function Navbar() {

  return (
    <div>
      <AppBar component="nav" className="absolute">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            className="flex flex-1"
          >
            Developer Dashboard
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Search />
        </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
