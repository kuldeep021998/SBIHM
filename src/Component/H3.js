import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import { SearchRounded } from "@mui/icons-material";

export default function H3() {
  return (
    <Grid style={{ padding: 20 }} container>
      <Grid item xs={4}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PhoneIphoneIcon
            style={{
              cursor: " pointer",
              color: "#fff",
              background: "#1E73BE",
              padding: 10,
              fontSize: 20,
              fontWeight: "bold",
              borderRadius: 20,
            }}
            fontSize="small"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          +91 032 22277022
        </div>
      </Grid>
      <Grid item xs={4}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PlaceIcon
            style={{
              cursor: " pointer",
              color: "#fff",
              background: "#1E73BE",
              padding: 10,
              fontSize: 20,
              fontWeight: "bold",
              borderRadius: 20,
            }}
            fontSize="small"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          Hijli Co-Operative Society,
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3px",
          }}
        >
          College Road, Purbapathri, Prembazar,
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3px",
          }}
        >
          Kharagpur,
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3px",
          }}
        >
          Paschim Medinipur - 721306.
        </div>
      </Grid>
      <Grid item xs={4}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <EmailIcon
            style={{
              cursor: " pointer",
              color: "#fff",
              background: "#1E73BE",
              padding: 10,
              fontSize: 20,
              fontWeight: "bold",
              borderRadius: 20,
            }}
            fontSize="small"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          info@sbihmkgp.com
        </div>
      </Grid>
    </Grid>
  );
}
