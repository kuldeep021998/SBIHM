import { Grid, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  const degrees = [
    {
      id: 1,
      heading: "Degree Courses",
      text1: "Bachelor Degree in Hotel Management",
      text2: "Diploma in Hotel Management",
      text3: "MBA in Hotel Management",
      text4: "Master Degree in Hotel Management",
      text5: "Post Graduation Diploma in Hotel Management",
    },
    {
      id: 2,
      heading: "Certificate Courses",
      text1: "Certificate In Front Office Operation",
      text2: "Certificate In Accomodation Operation",
      text3: "Certificate In Kitchen Operation",
      text4: "Certificate In Restaurant & Bar Operation",
    },
    {
      id: 3,
      heading: "Diploma Courses",
      text1: "Certificate In Front Office Operation",
      text2: "Certificate In Accomodation Operation",
      text3: "Certificate In Kitchen Operation",
      text4: "Certificate In Restaurant & Bar Operation",
    },
  ];

  const showOptions = () => {
    return degrees.map((item) => {
      return (
        <Grid item xs={12} sx={{ marginRight: "10px" }}>
          <Typography
            style={{
              fontFamily: "Roboto Slab",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "0em",
            }}
          >
            {item.heading}
          </Typography>
          <Typography
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: "0em",
            }}
          >
            <Typography style={{ marginTop: "10px" }}>{item.text1}</Typography>
            <Typography style={{ marginTop: "5px" }}>{item.text2}</Typography>
            <Typography style={{ marginTop: "5px" }}>{item.text3}</Typography>
            <Typography style={{ marginTop: "5px" }}>{item.text4}</Typography>
            <Typography style={{ marginTop: "5px" }}>{item.text5}</Typography>
          </Typography>
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          display: "flex",
          bgcolor: "#0A253D",
        }}
      >
        <Grid item xs={3} sx={{ margin: 3 }}>
          <Typography
            style={{
              fontFamily: "Roboto Slab",
              fontSize: "32px",
              fontWeight: 500,
              lineHeight: "56px",
              letterSpacing: "0em",
            }}
          >
            SBIHM Kharagpur
          </Typography>
          <Typography
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: "0em",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Amet erat et tempor lorem.
            Integer purus lobortis commodo amet turpis lectus sed tincidunt non.
            Id orci ultricies lectus nisi.
          </Typography>
          <Typography
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              display: "flex",
            }}
          >
            <Typography style={{ margin: 5 }}>
              <InstagramIcon htmlColor="white" />
            </Typography>
            <Typography style={{ margin: 5 }}>
              <LinkedInIcon htmlColor="white" />
            </Typography>
            <Typography style={{ margin: 5 }}>
              <FacebookIcon htmlColor="white" />
            </Typography>
          </Typography>
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 5,
          }}
        >
          {showOptions()}
        </Grid>
      </Grid>
    </Grid>
  );
}
