import React from "react";
import { Grid, Typography, Paper, Divider } from "@mui/material";
import "../style.css";

export default function Zoom2() {
  const data = [
    {
      id: 1,
      image: "/Assets/blue.png",
      coursetext1: "Certificate In Front",
      coursetext2: "Office Operation",
    },
    {
      id: 2,
      image: "/Assets/blue.png",
      coursetext1: "Certificate In Front",
      coursetext2: "Accomodation Operation",
    },
    {
      id: 3,
      image: "/Assets/blue.png",
      coursetext1: "Certificate In Kitchen",
      coursetext2: "Operation",
    },
  ];

  const fetchData = () => {
    return data.map((item) => {
      return (
        <Grid item className="Stylesheet_trendingimg">
          <Grid item >
            <img
              src={item.image}
              height={200}
              width={280}
              style={{
                borderRadius: 10,
              }}
            />
          </Grid>
          <Grid item sx={{ marginTop: "-190px" }}>
            <Typography sx={{ textAlign: "center" }}>
              {item.coursetext1}
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              {item.coursetext2}
            </Typography>
            <Typography sx={{ textAlign: "center" }}>|</Typography>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 5,
                marginLeft: 5,
              }}
            >
              <Grid>
                <Typography>Duration</Typography>
                <Typography sx={{ textAlign: "center" }}>6 months</Typography>
              </Grid>
              <Grid>
                <Typography>Duration</Typography>
                <Typography sx={{ textAlign: "center" }}>6 months</Typography>
              </Grid>
            </Grid>
            <Grid
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginTop: 2,
              }}
            >
              <Grid
                sx={{
                  height: 28,
                  width: 100,
                  backgroundColor: "white",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Typography>Learn More</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Grid item xs={12}>
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
          Our Degree Courses
        </Typography>
      </Grid>
      <Grid item sx={{ display: "flex", flexDirection: "row",justifyContent: 'space-between' }}>
        {fetchData()}
      </Grid>
    </Grid>
  );
}
