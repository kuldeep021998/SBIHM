import React from "react";
import { Grid, Typography, Paper, Divider } from "@mui/material";
import "../style.css";

export default function Zoom1() {
  const data = [
    {
      id: 1,
      image: "/Assets/blue.png",
      coursetext1: "Certificate In Front",
      coursetext2: "Office Operation",
      btntext: "Learn More",
    },
    {
      id: 2,
      image: "/Assets/blue.png",
      coursetext1: "Certificate In Front",
      coursetext2: "Accomodation Operation",
      btntext: "Learn More",
    },
    {
      id: 3,
      image: "/Assets/blue.png",
      coursetext1: "Certificate In Kitchen",
      coursetext2: "Operation",
      duration: "Duration",
      time: "6 months",
      btntext: "Learn More",
      symbol: "|",
    },
    {
      id: 4,
      image: "/Assets/blue.png",
      coursetext1: "Certificate In Restaurant &",
      coursetext2: "Bar Operation",
      btntext: "Learn More",
    },
  ];

  const fetchData = () => {
    return data.map((item) => {
      return (
        <Grid item className="Stylesheet_trendingimg">
          <Grid>
            <img
              src={item.image}
              height={200}
              width={280}
              style={{
                borderRadius: 10,
                margin: 5,
              }}
            />
          </Grid>
          <Grid sx={{ marginTop: "-195px" }}>
            <Typography sx={{ textAlign: "center" }}>
              {item.coursetext1}
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              {item.coursetext2}
            </Typography>
            <Typography sx={{ textAlign: "center" }}>{item.symbol}</Typography>
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
                <Typography>{item.duration}</Typography>
                <Typography sx={{ textAlign: "center" }}>
                  {item.time}
                </Typography>
              </Grid>
              <Grid>
                <Typography>{item.duration}</Typography>
                <Typography sx={{ textAlign: "center" }}>
                  {item.time}
                </Typography>
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
                <Typography>{item.btntext}</Typography>
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
          Our Certificate Courses
        </Typography>
      </Grid>
      <Grid item sx={{ display: "flex", flexDirection: "row" }}>
        {fetchData()}
      </Grid>
    </Grid>
  );
}
