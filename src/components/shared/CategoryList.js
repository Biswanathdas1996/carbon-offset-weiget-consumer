import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import imgx1 from "../../assets/images/fastest-commercial-airliners-7.png";
import imgx2 from "../../assets/images/Remarketing+and+brokerage.jpg";
import imgx4 from "../../assets/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg";
import imgx5 from "../../assets/images/6470e5c1-dc86-4dfc-8c4c-12b23dec4c80.jpg";

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
            Samples
          </Typography>
          <br />
        </Grid>

        <Grid item xs={4}>
          {cardUI(`Airlines 1`, imgx1, `/sample-1`)}
        </Grid>
        <Grid item xs={4}>
          {cardUI(`Airlines 2`, imgx2, `/sample-2`)}
        </Grid>

        <Grid item xs={4}>
          {cardUI(`Food Delivery `, imgx4, `/sample-3`)}
        </Grid>
        <Grid item xs={4}>
          {cardUI(`Elicticity Bill `, imgx5, `/sample-4`)}
        </Grid>
      </Grid>
      <div style={{ marginTop: 50 }}></div>
    </>
  );
}
