import { Fragment, React, createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Typography, Grid, Hidden } from "@mui/material";
import "../../style.css";

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
        <Grid>
          <Hidden smUp mdUp>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <img
                  src={item.image}
                  height={250}
                  width={230}
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img src="/Assets/inverted.png" height={50} width={50} />
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "36px",
                  letterSpacing: "0em",
                  color: "#0A253D",
                  textAlign: "center",
                }}
              >
                {item.text1}
              </div>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "36px",
                  letterSpacing: "0em",
                  color: "#0A253D",
                  textAlign: "center",
                }}
              >
                {item.text2}
              </div>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "36px",
                  letterSpacing: "0em",
                  color: "#0A253D",
                  textAlign: "center",
                }}
              >
                {item.text3}
              </div>
              <div
                style={{
                  fontFamily: "Roboto Slab",
                  fontSize: "24px",
                  fontWeight: 500,
                  lineHeight: "40px",
                  letterSpacing: "0em",
                  color: "#1E73BE",
                  textAlign: "center",
                }}
              >
                {item.name}
              </div>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "36px",
                  letterSpacing: "0em",
                  color: "#0A253D",
                  textAlign: "center",
                }}
              >
                {item.course}
              </div>
            </div>
          </Hidden>
          <Hidden smDown xsDown mdDown>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div>
                <img
                  src={item.image}
                  height={250}
                  width={230}
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </div>

              <div>
                <img src="/Assets/inverted.png" height={50} width={50} />
                <div
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
                </div>
                <div
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
                </div>
                <div
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
                </div>
                <div
                  style={{
                    fontFamily: "Roboto Slab",
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: "40px",
                    letterSpacing: "0em",
                    color: "#1E73BE",
                  }}
                >
                  {item.name}
                </div>
                <div
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
                </div>
              </div>
            </div>
          </Hidden>
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
      sx={{
        backgroundColor: "#1E73BE14",
        padding: 5,
      }}
    >
      <Grid item xs={12} lg={12} sx={{ padding: 3 }}>
        <Typography
          style={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#0A253D",
          }}
        >
          Hear From Our Students
        </Typography>
      </Grid>

      <Hidden xsDown smDown>
        <Grid
          item
          lg={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
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
      </Hidden>

      <Grid item lg={8} xs={12}>
        <Slider ref={mySlider} {...settings}>
          {playSlide()}
        </Slider>
      </Grid>

      <Hidden xsDown smDown>
        <Grid
          item
          lg={2}
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
      </Hidden>
    </Grid>
  );
}
