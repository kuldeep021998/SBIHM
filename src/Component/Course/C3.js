import React, { createRef } from "react";
import { Button, Grid, Hidden, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style.css";
import { BsDot } from "react-icons/bs";
export default function C3() {
  const mySlider = createRef();

  var settings = {
    dots: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const curriculam = [
    {
      id: 1,
      main: "1st Year",
      data: [
        "Communicative English",
        "Front Office Management",
        "House Keeping Management",
        "Hotel Administration",
        "Tourism Management",
        "Front Office Management (P)",
        "House Keeping Management (P)",
      ],
    },
    {
      id: 2,
      main: "2nd Year",
      data: [
        "Food Production",
        "Food and Beverage Service",
        "Food Safety and Microbiology",
        "Computer Applications",
        "Food Production (P)",
        "Food and Beverage Service (P)",
      ],
    },
    {
      id: 3,
      main: "3rd Year",
      data: [
        "Food and Beverage Management",
        "Hotel Accounts",
        "HR Management in Hospitality Industry",
        "Entrepreneurship Management",
        "Industrial Training",
      ],
    },
  ];

  const cards = () => {
    return curriculam.map((item) => {
      return (
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
          }}
          className="Stylesheet_trendingimg"
        >
          <Box
            elevation={3}
            style={{
              backgroundColor: "#1E73BE14",
              padding: "5%",
              width: "90%",
              height: 250,
              borderRadius: "10px",
            }}
          >
            <div
              style={{
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
            </div>
            <div style={{ marginLeft: "15px", marginTop: "10px" }}>
              {item.data.map((itm) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BsDot color="#1E73BE" size={"30px"} />
                  </div>
                  <div
                    style={{
                      fontFamily: "DM Sans",
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "0em",
                      color: "#0A253D",
                    }}
                  >
                    {itm}
                  </div>
                </div>
              ))}
            </div>
          </Box>
        </Grid>
      );
    });
  };

  return (
    <Grid container>
      <Grid lg={12} xs={12}>
        <Slider ref={mySlider} {...settings}>
          {cards()}
        </Slider>
      </Grid>
    </Grid>
  );
}
