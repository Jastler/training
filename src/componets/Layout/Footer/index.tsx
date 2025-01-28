import { Box } from "@mui/material";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        backgroundColor: "primary.main",
        color: "white",
      }}
    >
      © {new Date().getFullYear()} Taras Chirkov
    </Box>
  );
};

export default Footer;
