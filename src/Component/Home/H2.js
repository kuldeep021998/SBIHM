import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import "../../style.css";

export default function H2() {
  return (
    <Grid
      sx={{
        padding: 5,
      }}
      container
    >
      <Grid
        sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}
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
            textAlign: "left",
            width: "70%",
          }}
        >
          <div>
            We are an authorised Vocational Training Partner of School of
            Vocational Studies
          </div>
        </div>
      </Grid>
      <Grid sm={12} lg={6} xs={12}>
        <img
          className="abc"
          src="/Assets/sbihm/img_1_1628229558197.jpg"
          width={"100%"}
          height={"100%"}
        />
      </Grid>
    </Grid>
  );
}
