import { IconButton, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Search } from "@mui/icons-material";


function Navbar() {

  return (
    <div>
      {/* <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Developer names
          </span>
          <div className="flex md:order-2">
            <SearchIcon />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"></ul>
          </div>
        </div>
      </nav> */}
      <AppBar component="nav" className="absolute">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            className="flex flex-1"
          >
            Developer Name
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
