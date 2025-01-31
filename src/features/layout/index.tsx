import Header from "./Header";
import Footer from "./Footer";

import { Box, Container } from "@mui/material";

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
        style={{ marginTop: "24px", display: "flex" }}
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {children}
        </Container>
      </Container>
      <Footer />
    </Box>
  );
};
