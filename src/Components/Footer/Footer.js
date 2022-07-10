import * as React from "react";
import {
  Typography,
  Box,
} from "@mui/material";

//TODO: sticky footer

const Footer = () => {
  return (
    <footer>
    <Box
      sx={{
        width: "100%",
        bottom: 0,
        left: 0,
        textAlign: "center",
        bgcolor: "#1976d2",
        color: "#fff",
        position: "fixed",


      }}
      
    >
        <Typography variant="h6">
          Coded with ❤️ Kamil Święconek
        </Typography>
      </Box>
    </footer>

  );
};

export default Footer;
