import React from "react";
import { Container } from "components/Container";
import { Header } from "components/Header/Header";
import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
