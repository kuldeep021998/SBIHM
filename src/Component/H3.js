import React, { useState, useEffect } from "react";
import { Grid, Typography, Hidden } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";

export default function H3() {
  return (
    <Grid
      style={{
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      container
    >
      <Hidden xsDown smDown>
        <Grid item lg={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
            }}
          >
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
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            +91 032 22277022
          </div>
        </Grid>
        <Grid item lg={4}>
          <div style={{ display: "flex", justifyContent: "center", margin: 5 }}>
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
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            Hijli Co-Operative Society,
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            College Road, Purbapathri, Prembazar,
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            Kharagpur,
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            Paschim Medinipur - 721306.
          </div>
        </Grid>
        <Grid lg={4}>
          <div style={{ display: "flex", justifyContent: "center", margin: 5 }}>
            <EmailIcon
              style={{
                cursor: "pointer",
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
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            info@sbihmkgp.com
          </div>
        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid item xs={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
            }}
          >
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
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            +91 032 22277022
          </div>
        </Grid>

        <Grid xs={6}>
          <div style={{ display: "flex", justifyContent: "center", margin: 5 }}>
            <EmailIcon
              style={{
                cursor: "pointer",
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
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            info@sbihmkgp.com
          </div>
        </Grid>

        <Grid item xs={12} sx={{ marginTop: "10px" }}>
          <div style={{ display: "flex", justifyContent: "center", margin: 5 }}>
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
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            Hijli Co-Operative Society,
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            College Road, Purbapathri, Prembazar,
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            Kharagpur,
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            Paschim Medinipur - 721306.
          </div>
        </Grid>
      </Hidden>
    </Grid>
  );
}
