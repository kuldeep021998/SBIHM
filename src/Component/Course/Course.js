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
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
        <Grid lg={12} item className="Stylesheet_trendingimg">
          <Box
            elevation={3}
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
      <Hidden smDown xsDown>
        <Grid
          sx={{
            padding: 5,
            backgroundColor: "#1E73BE",
            margin: 5,
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "10px",
            width: "100%",
          }}
        >
          <Grid lg={3} sx={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0.02em",
                color: "#FFFFFFA3",
              }}
            >
              Duration
            </div>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "28px",
                letterSpacing: "0.02em",
                color: "#FFFFFF",
              }}
            >
              3 years
            </div>
          </Grid>
          <Grid lg={3} sx={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0.02em",
                color: "#FFFFFFA3",
              }}
            >
              Eligibility
            </div>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "28px",
                letterSpacing: "0.02em",
                color: "#FFFFFF",
              }}
            >
              10 + 2
            </div>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "28px",
                letterSpacing: "0.02em",
                color: "#FFFFFF",
              }}
            >
              Passed
            </div>
          </Grid>
          <Grid lg={3} sx={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0.02em",
                color: "#FFFFFFA3",
              }}
            >
              Industrial Training Duration
            </div>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "28px",
                letterSpacing: "0.02em",
                color: "#FFFFFF",
              }}
            >
              6 months in
            </div>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "28px",
                letterSpacing: "0.02em",
                color: "#FFFFFF",
              }}
            >
              5 star hotel
            </div>
          </Grid>
          <Grid lg={3} sx={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0.02em",
                color: "#FFFFFFA3",
              }}
            >
              Placement
            </div>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "28px",
                letterSpacing: "0.02em",
                color: "#FFFFFF",
              }}
            >
              Indian &
            </div>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "28px",
                letterSpacing: "0.02em",
                color: "#FFFFFF",
              }}
            >
              Foreign
            </div>
          </Grid>
        </Grid>
      </Hidden>

      

      {/* <Grid
        item
        lg={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Slider ref={mySlider} {...settings}>
          {cards()}
        </Slider>
      </Grid> */}

      

      <Grid xs={12} lg={6}>
        <div
          className="style_iandt"
          style={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0.02em",
            textAlign: "center",
            color: "#0A253D",
            padding: 10,
          }}
        >
          Internship & Training
        </div>
        <div
          className="style_itext"
          style={{
            fontFamily: "DM Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "32px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#0A253D",
            marginTop: "15px",
            padding: 10,
          }}
        >
          Internship & Training Programme is too much essential or compulsory
          for each student. In this training the student will have live exposure
          of the 5-star Hotels, and also develop skills, discipline, knowledge
          and experiences which will help everyone during campus recruitment to
          get best job opportunities. The Industrial Training is a combination
          of Theory and Practice.
        </div>
        <div
          className="style_itext"
          style={{
            fontFamily: "DM Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "32px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#0A253D",
            marginTop: "15px",
            padding: 10,
          }}
        >
          <li>Kitchen Operation</li>
          <li>Food and Beverage Cum Bar service</li>
          <li>Front Office Operation</li>
          <li>Housekeeping Operation</li>
        </div>
      </Grid>
      <Grid
        lg={6}
        xs={12}
        sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
      >
        <img src="/Assets/training.png" width={"70%"} />
      </Grid>

      <Grid lg={12} sx={{ backgroundColor: "#1E73BE14", padding: 5 }}>
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontSize: "28px",
            fontWeight: 700,
            lineHeight: "40px",
            letterSpacing: "0.02em",
            textAlign: "center",
            color: "#0A253D",
            marginTop: "15px",
          }}
        >
          Don’t miss out on the opportunity to build your career with
        </Typography>
        <Typography
          sx={{
            fontFamily: "Noto Serif",
            fontSize: "28px",
            fontWeight: 600,
            lineHeight: "40px",
            letterSpacing: "0.02em",
            textAlign: "center",
            color: "#1E73BE",
          }}
        >
          Bachelor Degree in Hotel Management
        </Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              borderRadius: 50,
              color: "black",
              height: 40,
              width: "40%",
              backgroundColor: "#FFFFFF",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              borderBlockColor: "black",
              marginRight: "30px",
            }}
          >
            Talk to Institute
          </div>

          <div
            style={{
              borderRadius: 50,
              color: "black",
              height: 40,
              width: "40%",
              backgroundColor: "#1E73BE",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Apply Now
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
