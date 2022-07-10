import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const Dogs = ({ dogsImage, dogsFact }) => {


  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        align="center"
        sx={{ maxWidth: 345, mt: "1rem", mb: "1rem", display: "block" }}
      >
        {dogsImage && (
          <CardMedia
            component="img"
            height="194"
            image={dogsImage}
            alt="Dog Image"
          />
        )}

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {dogsFact}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dogs;
