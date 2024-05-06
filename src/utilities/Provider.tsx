"use client";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <UserProvider>
      <AppRouterCacheProvider options={{ key: "css" }}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </QueryClientProvider>
      </AppRouterCacheProvider>
    </UserProvider>
  );
};

export default Provider;
