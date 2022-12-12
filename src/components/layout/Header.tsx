import { Component } from "solid-js";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@suid/material";
import { Menu } from "@suid/icons-material";

export const Header: Component = () => {
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#041119" }} position="static">
        <Toolbar>
          <Typography fontWeight={"bold"} sx={{ flexGrow: 1 }}>
            Jot
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
