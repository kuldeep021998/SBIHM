import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";

export default function H2() {
  return (
    <Grid container spacing={2}>
      <Grid
        xs={12}
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: 5,
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Noto Serif",
              fontSize: "32px",
              fontWeight: 600,
              lineHeight: "48px",
              letterSpacing: "0.02em",
              color: "#0A253D",
              textAlign: "left",
            }}
          >
            We are an authorised Vocational Training Partner of School of
            Vocational Studies
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            margin: "20px",
          }}
        >
          <img
            src="/Assets/sbihm/img_1_1628229558197.jpg"
            style={{ height: 350, width: 600 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
