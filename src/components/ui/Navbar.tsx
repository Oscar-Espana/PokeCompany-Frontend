import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">PokeCompany</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box>
          <NextLink href="/jobs" passHref>
            <Link display="flex" alignItems="center">
              <Typography
                fontWeight={500}
                sx={{
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                Jobs
              </Typography>
            </Link>
          </NextLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
