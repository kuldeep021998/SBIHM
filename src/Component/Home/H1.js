import React, { useState, useEffect } from "react";
import { Grid, Hidden } from "@mui/material";

export default function H1() {
  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid lg={6} xs={12}>
        {/* <Hidden smDown xsDown>
          <div
            style={{
              backgroundColor: "#1E73BE0A",
              height: 220,
              width: 170,
              borderTopRightRadius: "12px",
              borderEndEndRadius: "12px",
            }}
          ></div>
        </Hidden> */}
        <div
          style={{
            width: "83%",
            padding: "10px",
            marginLeft: "8%",
          }}
        >
          <div
            style={{
              fontFamily: "Noto Serif",
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "48px",
              letterSpacing: "0.02em",
              color: "#0A253D",
            }}
          >
            We produce excellence
          </div>
          <div
            style={{
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
          </div>
          <div
            style={{
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
          </div>
        </div>
      </Grid>
      <Grid item lg={6} xs={12} sx={{ padding: "10px" }}>
        <img
          src="/Assets/banner.png"
          style={{
            height: "480px",
            width: "100%",
            borderRadius: "12px",
          }}
        />
      </Grid>
    </Grid>
  );
}
