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
import { useRouter } from "next/router";

export const Navbar = () => {
  const { asPath } = useRouter();

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">PokeCompany</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: "flex", gap: 4 }}>
          <NextLink href="/jobs" passHref>
            <Link display="flex" alignItems="center">
              <Typography
                fontWeight={500}
                sx={{
                  color: asPath.includes("/jobs") ? "secondary.main" : null,
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                Jobs
              </Typography>
            </Link>
          </NextLink>

          <NextLink href="/applicants" passHref>
            <Link display="flex" alignItems="center">
              <Typography
                fontWeight={500}
                sx={{
                  color: asPath.includes("/applicants")
                    ? "secondary.main"
                    : null,
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                Applicant
              </Typography>
            </Link>
          </NextLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
