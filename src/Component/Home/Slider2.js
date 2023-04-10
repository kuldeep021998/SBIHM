import { Divider, Grid, Button, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState, createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Slider2() {
  const mySlider = createRef();

  var settings = {
    dots: false,
    autoplay: 200,
    speed: 500,
    slidesToShow: 6,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const images = [
    { image: "/Assets/Partners/holidayinn.jpeg" },
    { image: "/Assets/Partners/hyatt.jpeg" },
    { image: "/Assets/Partners/lemotree.jpeg" },
    { image: "/Assets/Partners/mariott.jpeg" },
    { image: "/Assets/Partners/parkhotels.jpeg" },
    { image: "/Assets/Partners/Radisson.jpeg" },
    { image: "/Assets/Partners/Sheratom.jpeg" },
    { image: "/Assets/Partners/starwoodk.jpeg" },
  ];

  const playSlide = () => {
    return images.map((item) => {
      return (
        <Grid
          sx={{
            display: "flex",
            margin: "50px",
            flex: 1,
          }}
        >
          <img
            src={item.image}
            height={50}
            width={100}
            style={{
              margin: 30,
              border: "1px solid #0A253D14 ",
              margin: "2px",
              padding: "5px",
              borderRadius: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Grid>
      );
    });
  };
  return (
    <Grid continer>
      <Grid xs={12} lg={12}>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: " 0.02em",
          }}
        >
          Our Partner Network
        </Typography>
      </Grid>
      <Grid lg={12} xs={12}>
        <Slider ref={mySlider} {...settings}>
          {playSlide()}
        </Slider>
      </Grid>
    </Grid>
  );
}
