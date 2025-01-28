import Header from "../Header";
import Footer from "../Footer";

import styles from "./index.module.scss";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

export type ComponentProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: ComponentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Мінімальна висота сторінки — 100% висоти вікна
      }}
    >
      <Header />
      <Container
        sx={{ flexGrow: 1, mt: 2 }}
        maxWidth="sm"
        style={{ marginTop: "24px" }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
