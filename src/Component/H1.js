import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";

export default function H1() {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        sx={{
          height: "250px",
          width: "180px",
          backgroundColor: "#1E73BE0A",
          marginTop: "30px",
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px",
          position: "absolute",
        }}
      ></Grid>
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
          //   xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Noto Serif",
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "48px",
              letterSpacing: "0.02em",
              color: "#0A253D",
            }}
          >
            We produce excellence
          </Typography>
          <Typography
            sx={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "36px",
              letterSpacing: "0.02em",
              marginTop: "30px",
              alignSelf: "stretch",
              color: "#666666",
            }}
          >
            We are an institution providing education in the field of
            Hospitality & Tourism Management. The main objective of SBIHM is to
            produce manpower in hospitality industry according to the
            hospitality demand and the goal of SBIHM Kharagpur is to give the
            proper professional hospitality education for our students to make
            their bright future, an ISO 9001:2015.
          </Typography>
          <Typography
            sx={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "36px",
              letterSpacing: "0.02em",
              marginTop: "10px",
              color: "#666666",
            }}
          >
            A gateway to your future from here in Kharagpur..
          </Typography>
        </Grid>
        <Grid
          item
          //   xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            // backgroundColor: "red",
            margin: "20px",
          }}
        >
          <img
            src="/Assets/banner.png"
            style={{ height: 350, width: 550, borderRadius: "12px" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
