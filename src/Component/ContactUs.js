import * as React from "react";
import { Grid, Typography, TextField, Button, Hidden } from "@mui/material";
import Header from "./Home/Header";
import H3 from "./Home/H3";
import Footer from "./Footer";
import Map1 from "./Map1";
export default function ContactUs() {
  return (
    <Grid container>
      <Grid xs={12} lg={12} sm={12}>
        <Header />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 5 }}>
        <Typography
          style={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#0A253D",
            marginTop: 10,
          }}
        >
          Contact us
        </Typography>
        <Typography
          style={{
            fontFamily: "Noto Serif",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "36px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#666666",
            marginTop: 10,
          }}
        >
          Reach out to us if you have any queries
        </Typography>
      </Grid>

      <Grid sx={{ padding: 5 }}>
        <Map1 />
      </Grid>

      <Grid item xs={12}>
        <H3 />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 5 }}></Grid>
    </Grid>
  );
}
