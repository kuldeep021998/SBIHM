import { Fragment, React, createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Typography, Grid, Box } from "@mui/material";

export default function Slider3() {
  const mySlider = createRef();

  const data = [
    {
      id: 1,
      image: "/Assets/sbihm/img_1_1628229558197.jpg",
      name: "Shreya Banerjee",
      course: "Hotel Management Student",
      text1: "100% trusted HM institute in Kharagpur. More than",
      text2: "100 of students are placed in 5 star hotels all over",
      text3:
        "India and abroad. Well study environment and well behaved teacher.",
    },
    {
      id: 2,
      image: "/Assets/sbihm/img_1_1628229558197.jpg",
      name: "Shreya Banerjee",
      course: "Hotel Management Student",
      text1: "100% trusted HM institute in Kharagpur. More than",
      text2: "100 of students are placed in 5 star hotels all over",
      text3:
        "India and abroad. Well study environment and well behaved teacher.",
    },
    {
      id: 2,
      image: "/Assets/sbihm/img_1_1628229558197.jpg",
      name: "Shreya Banerjee",
      course: "Hotel Management Student",
      text1: "100% trusted HM institute in Kharagpur. More than",
      text2: "100 of students are placed in 5 star hotels all over",
      text3:
        "India and abroad. Well study environment and well behaved teacher.",
    },
    {
      id: 2,
      image: "/Assets/sbihm/img_1_1628229558197.jpg",
      name: "Shreya Banerjee",
      course: "Hotel Management Student",
      text1: "100% trusted HM institute in Kharagpur. More than",
      text2: "100 of students are placed in 5 star hotels all over",
      text3:
        "India and abroad. Well study environment and well behaved teacher.",
    },
    ,
  ];

  var settings = {
    dots: true,
    autoplay: 200,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const playSlide = () => {
    return data.map((item) => {
      return (
        <Grid item >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img
                src={item.image}
                height={250}
                width={300}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div style={{ marginLeft: 20 }}>
              <img src="/Assets/inverted.png" height={50} width={50} />
              <Typography
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "36px",
                  letterSpacing: "0em",
                  color: "#0A253D",
                }}
              >
                {item.text1}
              </Typography>
              <Typography
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "36px",
                  letterSpacing: "0em",
                  color: "#0A253D",
                }}
              >
                {item.text2}
              </Typography>
              <Typography
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "36px",
                  letterSpacing: "0em",
                  color: "#0A253D",
                }}
              >
                {item.text3}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto Slab",
                  fontSize: "24px",
                  fontWeight: 500,
                  lineHeight: "40px",
                  letterSpacing: "0em",
                  color: "#1E73BE",
                }}
              >
                {item.name}
              </Typography>
              <Typography
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "36px",
                  letterSpacing: "0em",
                  color: "#0A253D",
                }}
              >
                {item.course}
              </Typography>
            </div>
          </div>
        </Grid>
      );
    });
  };

  const handleLeftClick = () => {
    mySlider.current.slickPrev();
  };

  const handleRightClick = () => {
    mySlider.current.slickNext();
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E73BE14",
        paddingBottom: 5,
      }}
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
          Hear From Our Students
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
      >
        <ArrowBackIcon
          style={{
            cursor: " pointer",
            color: "#1E73BE",
            background: "#FFFFFF",
            padding: 10,
            fontSize: 20,
            fontWeight: "bold",
            borderRadius: 20,
          }}
          fontSize="small"
          onClick={handleLeftClick}
        />
      </Grid>
      <Grid item xs={8}>
        <Slider ref={mySlider} {...settings}>
          {playSlide()}
        </Slider>
      </Grid>
      <Grid
        item
        xs={2}
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <ArrowForwardIcon
          style={{
            cursor: " pointer",
            color: "#1E73BE",
            background: "#FFFFFF",
            padding: 10,
            fontSize: 20,
            fontWeight: "bold",
            borderRadius: 20,
          }}
          fontSize="small"
          onClick={handleRightClick}
        />
      </Grid>
    </Grid>
  );
}
