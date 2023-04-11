import React, { createRef } from "react";
import { Button, Grid, Hidden, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style.css";

export default function Course() {
  const mySlider = createRef();

  var settings = {
    dots: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      main: "1st Year",
      text1: "Communicative English",
      text2: "Front Office Management",
      text3: "House Keeping Management",
      text4: "Hotel Administration",
      text5: "Tourism Management",
      text6: "Front Office Management (P)",
      text7: "House Keeping Management (P)",
    },
    {
      id: 2,
      main: "2nd Year",
      text1: "Food Production",
      text2: "Food and Beverage Service",
      text3: "Food Safety and Microbiology",
      text4: "Computer Applications",
      text5: "Food Production (P)",
      text6: "Food and Beverage Service (P)",
    },
    {
      id: 3,
      main: "3rd Year",
      text1: "Food and Beverage Management",
      text2: "Hotel Accounts",
      text3: "HR Management in Hospitality Industry",
      text4: "Entrepreneurship Management",
      text5: "Industrial Training",
    },
  ];

  const cards = () => {
    return data.map((item) => {
      return (
        <Grid lg={12} className="Stylesheet_trendingimg">
          <Box
            // elevation={3}
            style={{
              backgroundColor: "#1E73BE14",
              padding: "10px",
              width: 350,
              height: 250,
              margin: "10px",
            }}
          >
            <Typography
              sx={{
                marginLeft: "20px",
                color: "#0A253D",
                fontFamily: "Noto Serif",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "32px",
                letterSpacing: "0em",
                color: "#0A253D",
              }}
            >
              {item.main}
            </Typography>
            <div>
              <ul style={{ color: "#1E73BE" }}>
                <li>
                  <Typography
                    style={{
                      fontFamily: "DM Sans",
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#0A253D",
                    }}
                  >
                    {item.text1}
                  </Typography>
                </li>
                <li>
                  <Typography
                    style={{
                      fontFamily: "DM Sans",
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#0A253D",
                    }}
                  >
                    {item.text2}
                  </Typography>
                </li>
                <li>
                  <Typography
                    style={{
                      fontFamily: "DM Sans",
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#0A253D",
                    }}
                  >
                    {item.text3}
                  </Typography>
                </li>
                <li>
                  <Typography
                    style={{
                      fontFamily: "DM Sans",
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#0A253D",
                    }}
                  >
                    {item.text4}
                  </Typography>
                </li>
                <li>
                  <Typography
                    style={{
                      fontFamily: "DM Sans",
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#0A253D",
                    }}
                  >
                    {item.text5}
                  </Typography>
                </li>
                <li>
                  <Typography
                    style={{
                      fontFamily: "DM Sans",
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#0A253D",
                    }}
                  >
                    {item.text6}
                  </Typography>
                </li>
                <li>
                  <Typography
                    style={{
                      fontFamily: "DM Sans",
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#0A253D",
                    }}
                  >
                    {item.text7}
                  </Typography>
                </li>
              </ul>
            </div>
          </Box>
        </Grid>
      );
    });
  };

  return (
    <Grid container sx={{ justifyContent: "center" }}>
      {/* <Grid
        lg={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Slider ref={mySlider} {...settings}>
          {cards()}
        </Slider>
      </Grid> */}
    </Grid>
  );
}
