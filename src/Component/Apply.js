import { Grid, Typography, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";

export default function Apply() {
  return (
    <Grid spacing={2} container>
      <Grid item xs={12} sx={{ bgcolor: "#FFFFF" }}>
        <Typography
          sx={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#523D1C",
          }}
        >
          Apply Now
        </Typography>
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "36px",
            letterSpacing: "0.02em",
            textAlign: "center",
            color: "#666666",
          }}
        >
          Admission Process at SBHIM Kharagpur for the Academic Year 2022-23
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ bgcolor: "#FAF5ED", margin: 5 }}>
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "28px",
            letterSpacing: "0.02em",
            // textAlign: "center",
            color: "#000000",
          }}
        >
          Application Form
        </Typography>
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "28px",
            letterSpacing: "0.02em",
            // textAlign: "center",
            color: "#666666",
            marginTop: "10px",
          }}
        >
          Fill out the application form and our team will get back to you
        </Typography>
        <Grid item sx={{ bgcolor: "#FFFFFF", margin: 4 }}>
          <Grid item xs={12} sx={{ margin: 2 }}>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0.02em",
                color: "#000000",
                marginTop: "10px",
              }}
            >
              Personal Information
            </Typography>

            <Grid item sx={{ margin: 2 }}>
              <TextField
                label="Outlined"
                variant="outlined"
                fullWidth
                inputStyle={{ color: "white", padding: "25px" }}
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: 25,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
