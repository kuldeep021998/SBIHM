import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";

export default function H2() {
  return (
    <Grid
      sx={{
        padding: 10,
        display: "flex",
        alignItems: "center",
      }}
      container
    >
      <Grid
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          padding: 10,
        }}
        item
        sm={12}
        lg={6}
        xs={12}
      >
        <div
          style={{
            fontFamily: "Noto Serif",
            fontSize: "32px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0.02em",
            color: "#0A253D",
          }}
        >
          <div>We are an authorised</div>
          <div>Vocational Training Partner</div>
          <div>of School of Vocational</div>
          <div>Studies</div>
        </div>
      </Grid>
      <Grid
        item
        sm={12}
        lg={6}
        xs={12}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          // padding: 10,
        }}
      >
        <img
          src="/Assets/sbihm/img_1_1628229558197.jpg"
          width={600}
          height={350}
        />
      </Grid>
    </Grid>
  );
}
