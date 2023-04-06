import { Divider, Grid, Button, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState, createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Slider1() {
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

  const images = [
    { image: "/Assets/sbihm/img_1_1628229558197.jpg" },
    { image: "/Assets/sbihm/img_1_1628229558197.jpg" },
    { image: "/Assets/sbihm/img_1_1628229558197.jpg" },
    { image: "/Assets/sbihm/img_1_1628229558197.jpg" },
  ];

  const playSlide = () => {
    return images.map((item) => {
      return (
        <Grid xs={12} item>
          <img src={item.image} height={500} width={"100%"} />
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Slider ref={mySlider} {...settings}>
          {playSlide()}
        </Slider>
      </Grid>
    </Grid>
  );
}
