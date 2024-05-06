"use client";

import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

const AuthButtons = () => {
  const { user, error, isLoading } = useUser();

  const router = useRouter();

  if (isLoading) return <CircularProgress />;

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Stack direction="row">
      <>
        {user ? (
          <Stack>
            <div>
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body1">{user.email}</Typography>
            </div>

            <Button
              onClick={() => router.push("/api/auth/logout")}
              variant="contained"
              color="primary">
              Logout
            </Button>
          </Stack>
        ) : (
          <Button
            onClick={() => router.push("/api/auth/login")}
            variant="contained"
            color="primary">
            Login
          </Button>
        )}
      </>
    </Stack>
  );
};

export default AuthButtons;
