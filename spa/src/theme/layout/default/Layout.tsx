import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { DefaultAppBar } from "./AppBar";

export const DefaultLayout = () => {
  return (
    <>
      <DefaultAppBar />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
};
