import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import imgx1 from "../../assets/images/6SY62XLKNFNYJO7YTUDXKOGGMM.jpg";
import imgx2 from "../../assets/images/1_eROVN2pANPNY3wGuzQ0nGQ.png";
import imgx4 from "../../assets/images/0_k9o3-unmD8WUNxQ1.png";

import { useNavigate } from "react-router-dom";

export default function RecipeReviewCard() {
  let history = useNavigate();

  const cardUI = (text, img, link, height) => {
    return (
      <Card onClick={() => history(link)} style={{ cursor: "pointer" }}>
        <CardMedia
          component="img"
          height={height || "200"}
          image={img}
          alt="Paella dish"
        />
        <CardContent style={{ backgroundColor: "#11111114" }}>
          <Typography
            component="h1"
            variant="h7"
            align="left"
            color="text.primary"
            fontSize="25px"
            style={{ textAlign: "center" }}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={12}>
          <Typography
            component="h3"
            variant="h7"
            textAlign="left"
            color="text.primary"
            style={{ fontSize: 17, fontWeight: "bold" }}
          >
            Browse by category
          </Typography>
          <br />
        </Grid>

        <Grid item xs={4}>
          {cardUI(`Project 1`, imgx1, `/sample-1`)}
        </Grid>
        <Grid item xs={4}>
          {cardUI(`Project 2`, imgx2, `/sample-2`)}
        </Grid>

        <Grid item xs={4}>
          {cardUI(`Project 3`, imgx4, `/sample-3`)}
        </Grid>
      </Grid>
      <div style={{ marginTop: 50 }}></div>
    </>
  );
}
