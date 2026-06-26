import React from "react";
import { Button } from "@mui/material";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />

      <Search />

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#121212",
          color: "#34C94B",
          textTransform: "none",
          borderRadius: "12px",
          padding: "10px 18px",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#121212",
          },
        }}
      >
        Give Feedback
      </Button>
    </nav>
  );
};

export default Navbar;