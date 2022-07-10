import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";

const HomePage = ({dogsImage, catsImage}) => {


  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          align="center"
          sx={{
            maxWidth: 345,
            width: 345,
            mt: "1rem",
            mb: "1rem",
            display: "block",
            mr: "1rem"
          }}
          component="a"
          href="/dogs"
        >
          <CardMedia component="img" height="194" image={dogsImage} alt="Dog" />
        </Card>

        <Card
          align="center"
          sx={{
            maxWidth: 345,
            width: 345,
            mt: "1rem",
            mb: "1rem",
            display: "block",
          }}
          component="a"
          href="/cats"
        >
          <CardMedia component="img" height="194" image={catsImage} alt="Cat" />
        </Card>
      </Box>
    </>
  );
};

export default HomePage;
