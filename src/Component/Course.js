import React, { createRef } from "react";
import { Button, Grid, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Course() {
  const mySlider = createRef();

  var settings = {
    dots: true,
    autoplay: 300,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        <Grid
          sx={{
            margin: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "center",
          }}
        >
          <Card style={{ backgroundColor: "#1E73BE14", width: "30%" }}>
            <CardContent>
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
                  <li
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
                  </li>
                  <li
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
                  </li>
                  <li
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
                  </li>
                  <li
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
                  </li>
                  <li
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
                  </li>
                  <li
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
                  </li>
                  <li
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
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid xs={12} lg={6} sx={{ backgroundColor: "#1E73BE14", padding: 10 }}>
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "32px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#1E73BE",
          }}
        >
          Degree Courses
        </Typography>
        <Typography
          sx={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#0A253D",
          }}
        >
          Bachelor Degree in Hotel
        </Typography>
        <Typography
          sx={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#0A253D",
          }}
        >
          Management
        </Typography>
        <div>
          <Button
            sx={{ borderRadius: 15, marginTop: "20px", width: "40%" }}
            size="small"
            fullWidth
            variant="outlined"
          >
            About the Course
          </Button>
          <div>
            <Button
              sx={{ borderRadius: 15, marginTop: "10px", width: "40%" }}
              size="small"
              fullWidth
              variant="contained"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </Grid>
      <Grid xs={12} lg={6}>
        <img src="/Assets/banner.png" height={"100%"} width={"100%"} />
      </Grid>

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

      <Grid xs={12} lg={12}>
        <Typography
          sx={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0.02em",
            textAlign: "center",
            color: "#0A253D",
          }}
        >
          Course Curriculum
        </Typography>
      </Grid>

      <Grid item lg={12}>
        <Slider ref={mySlider} {...settings}>
          {cards()}
        </Slider>
      </Grid>

      <Grid lg={8} sx={{ paddingLeft: 30, paddingTop: 8 }}>
        <Typography
          style={{
            fontFamily: "Noto Serif",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "36px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#0A253D",
          }}
        >
          We have a well-equipped and organized placement cell,
        </Typography>
        <Typography
          style={{
            fontFamily: "Noto Serif",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "36px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#0A253D",
          }}
        >
          which is in constant touch with the industry for better
        </Typography>
        <Typography
          style={{
            fontFamily: "Noto Serif",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "36px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#0A253D",
          }}
        >
          placement opportunities for students.
        </Typography>
      </Grid>

      <Grid lg={4} sx={{ padding: 5 }}>
        <div>
          <Typography
            sx={{
              color: "#1E73BE",
              fontFamily: "DM Sans",
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: "56px",
            }}
          >
            40+
          </Typography>
          <Typography
            sx={{
              fontFamily: "Noto Serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "left",
              color: "#0A253D",
            }}
          >
            Brands visit our campus every year to pick students
          </Typography>
        </div>
        <div>
          <Typography
            sx={{
              color: "#1E73BE",
              fontFamily: "DM Sans",
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: "56px",
              marginTop: "20px",
            }}
          >
            40+
          </Typography>
          <Typography
            sx={{
              fontFamily: "Noto Serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "left",
              color: "#0A253D",
            }}
          >
            Students get successfully placed by the end of their academic year
          </Typography>
        </div>
      </Grid>

      <Grid xs={12} lg={6} sx={{ padding: 10 }}>
        <Typography
          sx={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0.02em",
            textAlign: "center",
            color: "#0A253D",
          }}
        >
          Internship & Training
        </Typography>
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "32px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#0A253D",
            marginTop: "15px",
          }}
        >
          Internship & Training Programme is too much essential or compulsory
          for each student. In this training the student will have live exposure
          of the 5-star Hotels, and also develop skills, discipline, knowledge
          and experiences which will help everyone during campus recruitment to
          get best job opportunities. The Industrial Training is a combination
          of Theory and Practice.
        </Typography>
        <div
          style={{
            fontFamily: "DM Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "32px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#0A253D",
            marginTop: "15px",
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

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Button
            fullWidth
            style={{
              borderRadius: 50,
              width: "20%",
              borderColor: "black",
              color: "black",
              marginRight: 50,
            }}
            variant="outlined"
          >
            Talk to Institute
          </Button>
          <Button
            fullWidth
            style={{ borderRadius: 50, width: "20%" }}
            variant="contained"
          >
            Apply Now
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
